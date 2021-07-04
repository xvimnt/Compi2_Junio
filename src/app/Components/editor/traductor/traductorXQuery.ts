import { NodoXML } from '../parser/Nodes/NodoXml';
import { EnvironmentXML } from '../parser/Symbol/EnviromentXML';
import { Error_ } from '../parser/Error';
import { errores } from '../parser/Errores';
import { XQuerySymbol, TypeXQuery } from '../parser/Symbol/xquerySymbol';
import { EnvironmentXQuery } from '../parser/Symbol/EnviromentXQueryTrad';
import { element } from 'protractor';
import { _Console } from '../parser/Util/Salida';

//traducciones

export class TraductorXQuery {
  constructor() {}

  traducir(ast: NodoXML, envXML: EnvironmentXML, envXQuery: EnvironmentXQuery) {
    // console.log(_Console.count);
    // console.log(_Console.heapPointer);
    // console.log(_Console.stackPointer);
    // console.log(_Console.heapPointer2);
    // console.log(_Console.stackPointer2);
    // console.log(_Console.labels);
    // console.log(_Console.salida);
    // console.log(ast);
    if (ast != null) {
      let tipo = ast.getTipo();
      // console.log(tipo);
      switch (tipo) {
        case 'LExpresiones':
          ast.getHijos().forEach((element) => {
            this.traducir(element, envXML, envXQuery);
          });
          break;
        case 'Let':
          this.traducirLet(ast, envXML, envXQuery);
          break;
      }
    }
    return _Console;
  }

  private traducirLet(
    ast: NodoXML,
    envXML: EnvironmentXML,
    envXQuery: EnvironmentXQuery
  ) {
    // console.log(ast, 'ejecutando let');
    //var name
    let varName = ast.getHijos()[0].name;
    //expresion
    let exp = ast.getHijos()[1];
    switch (exp.getTipo()) {
      case 'TO':
        // (exp to exp)
        break;
      case ',':
        // (exp , exp)
        break;
      case 'ExprLogica':
        // logica
        break;
      case 'Expr':
        // aritmetica
        console.log(this.traducirAritmetica(exp, envXML, envXQuery));
        break;
      case 'Exp':
        // xpath
        break;
      case 'Lexp':
        // xpath
        break;
      case 'Syntfin':
        // xpath
        break;
      case 'Fin':
        //valor || funcion xpath
        if (exp.type == exp.name) {
          //valor opc || preservada opc
          if (!exp.listaNodos[1]) {
            var val = this.traducirValor(exp.listaNodos[0], envXML, envXQuery);
            if (val[1] < 4) {
              //traducir
              var c = _Console.count;
              var h = _Console.heapPointer;
              var s = _Console.stackPointer;
              _Console.salida += `// let ${varName}=${val[0]}\n`;
              if (val[0] == 'true') {
                val[0] = 1;
              } else if (val[0] == 'false') {
                val[0] = 0;
              }
              _Console.salida += `t${c}=hxquery;\n`;
              _Console.salida += `HeapXQuery[(int)hxquery] = ${val[0]};\n`;
              _Console.salida += `hxquery = hxquery + 1;\n`;
              _Console.salida += `StackXQuery[(int)pxquery] = t${c};\n`;
              _Console.salida += 'pxquery = pxquery +1;\n\n';
              _Console.count++;
              _Console.heapPointer++;
              _Console.stackPointer++;
              //agregar a tabla de simbolos
              var sym = new XQuerySymbol(
                val[1],
                varName,
                val[0],
                exp.line,
                exp.column,
                envXQuery.nombre
              );
              sym.setPosicion(s);
              envXQuery.addSimbolo(sym);
            } else {
              if (val[0]) {
                //traducir
                var c = _Console.count;
                var h = _Console.heapPointer;
                var s = _Console.stackPointer;
                _Console.salida += `// let ${varName}=${val[0].nombre}\n`;
                _Console.salida += `t${c}=${val[0].posicion};\n`;
                _Console.salida += `StackXQuery[(int)pxquery] = t${c};\n`;
                _Console.salida += 'pxquery = pxquery + 1;\n\n';
                _Console.count++;
                _Console.stackPointer++;
                //agregar a tabla de simbolos
                var sym = new XQuerySymbol(
                  val[0].tipo,
                  varName,
                  val[0].valor,
                  exp.line,
                  exp.column,
                  envXQuery.nombre
                );
                sym.setPosicion(s);
                envXQuery.addSimbolo(sym);
              } else {
                //error
                errores.push(
                  new Error_(
                    exp.getLine(),
                    exp.getColumn(),
                    'Semantico',
                    `La variable no esta declarada => ${exp.listaNodos[0].nombre}`
                  )
                );
              }
            }
          } else {
            //array
          }
        }
        break;
      default:
        break;
    }
  }

  private traducirAritmetica(
    ast: NodoXML,
    envXML: EnvironmentXML,
    envXQuery: EnvironmentXQuery
  ) {
    if (ast) {
      // console.log('Traducir aritmetica');
      // console.log(ast);
      switch (ast.name) {
        case '+':
          //ejecutar izq
          var val1 = this.traducirAritmetica(
            ast.listaNodos[0],
            envXML,
            envXQuery
          );
          //ejecutar der
          var val2 = this.traducirAritmetica(
            ast.listaNodos[1],
            envXML,
            envXQuery
          );
          //sumar
          return val1 + val2;
        case '-':
          //ejecutar izq
          var val1 = this.traducirAritmetica(
            ast.listaNodos[0],
            envXML,
            envXQuery
          );
          //ejecutar der
          var val2 = this.traducirAritmetica(
            ast.listaNodos[1],
            envXML,
            envXQuery
          );
          //sumar
          return val1 - val2;
        case '*':
          //ejecutar izq
          var val1 = this.traducirAritmetica(
            ast.listaNodos[0],
            envXML,
            envXQuery
          );
          //ejecutar der
          var val2 = this.traducirAritmetica(
            ast.listaNodos[1],
            envXML,
            envXQuery
          );
          //sumar
          return val1 * val2;
        case 'div':
          //ejecutar izq
          var val1 = this.traducirAritmetica(
            ast.listaNodos[0],
            envXML,
            envXQuery
          );
          //ejecutar der
          var val2 = this.traducirAritmetica(
            ast.listaNodos[1],
            envXML,
            envXQuery
          );
          //sumar
          return val1 / val2;
        case 'mod':
          //ejecutar izq
          var val1 = this.traducirAritmetica(
            ast.listaNodos[0],
            envXML,
            envXQuery
          );
          //ejecutar der
          var val2 = this.traducirAritmetica(
            ast.listaNodos[1],
            envXML,
            envXQuery
          );
          //sumar
          return val1 % val2;
        case 'or':
          //ejecutar izq
          var val1 = this.traducirAritmetica(
            ast.listaNodos[0],
            envXML,
            envXQuery
          );
          //ejecutar der
          var val2 = this.traducirAritmetica(
            ast.listaNodos[1],
            envXML,
            envXQuery
          );
          //sumar
          return val1 || val2;
        case 'and':
          //ejecutar izq
          var val1 = this.traducirAritmetica(
            ast.listaNodos[0],
            envXML,
            envXQuery
          );
          //ejecutar der
          var val2 = this.traducirAritmetica(
            ast.listaNodos[1],
            envXML,
            envXQuery
          );
          //sumar
          return val1 && val2;
        case 'Fin':
          if (!ast.listaNodos[1]) {
            var val = this.traducirValor(ast.listaNodos[0], envXML, envXQuery);
            switch (val[1]) {
              case 0:
                //error
                break;
              case 1:
                return +val[0];
              case 2:
                return val[0];
              case 3:
                return val[0] === 'true' ? true : false;
              case 4:
                if (val[0]) {
                  switch (val[0].type) {
                    case 0:
                    //error
                    case 1:
                      return +val[0].value;
                    case 2:
                      return val[0].value;
                    case 3:
                      return val[0].value === 'true' ? true : false;
                  }
                }
            }
            if (val[1] === 4 && val[0]) {
              return val[0].valor;
            } else {
              return val[0];
            }
          }
      }
    }
  }

  private traducirValor(
    ast: NodoXML,
    envXML: EnvironmentXML,
    envXQuery: EnvironmentXQuery
  ) {
    switch (ast.type) {
      case 'ID':
        break;
      case 'NUMBER':
        return [ast.name, 1];
      case 'STRING':
        return [ast.name, 2];
      case 'BOOLEAN':
        return [ast.name, 3];
      case 'VARIABLE':
        return [envXQuery.searchVar(ast.name), 4];

      default:
        break;
    }
  }
}