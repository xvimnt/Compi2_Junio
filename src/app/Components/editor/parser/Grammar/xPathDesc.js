/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xPathDesc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,3],$V1=[1,7],$V2=[1,15],$V3=[1,10],$V4=[1,11],$V5=[1,12],$V6=[1,13],$V7=[1,14],$V8=[1,25],$V9=[1,26],$Va=[1,27],$Vb=[1,28],$Vc=[1,29],$Vd=[1,16],$Ve=[1,17],$Vf=[1,18],$Vg=[1,19],$Vh=[1,20],$Vi=[1,21],$Vj=[1,22],$Vk=[1,23],$Vl=[1,24],$Vm=[5,17,21,44,46,47,48,49,50,51,53,54,55,56,57,58],$Vn=[2,7],$Vo=[1,34],$Vp=[1,33],$Vq=[5,6,10,17,21,44,46,47,48,49,50,51,53,54,55,56,57,58],$Vr=[2,36],$Vs=[1,42],$Vt=[5,6,10,16,17,21,42,44,46,47,48,49,50,51,53,54,55,56,57,58],$Vu=[5,6,10,17,21,42,44,46,47,48,49,50,51,53,54,55,56,57,58],$Vv=[2,39],$Vw=[1,61],$Vx=[21,44,46,47,48,49,50,51],$Vy=[2,57],$Vz=[1,79],$VA=[1,77],$VB=[1,78],$VC=[1,80],$VD=[1,81],$VE=[1,82],$VF=[1,83];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"Exp":4,"EOF":5,"DIVSIGN":6,"Lexp":7,"Syntfin":8,"Lexp_prima":9,"ORSIGN":10,"Fin":11,"@":12,"Valor":13,"Opc":14,"Preservada":15,"::":16,"*":17,"DIR":18,"TEXT":19,"(":20,")":21,"NODE":22,"POSITION":23,"LAST":24,"ID":25,"NUMBER":26,"STRING":27,"STRING2":28,"DECIMAL":29,"CHILD":30,"DESCENDANT":31,"ANCESTOR":32,"PRECEDING":33,"FOLLOWING":34,"NAMESPACE":35,"SELF":36,"PARENT":37,"ATTR":38,"LPredicado":39,"Predicado":40,"LPredicado_prima":41,"[":42,"ExprLogica":43,"]":44,"Expr":45,"<=":46,">=":47,"=":48,"!=":49,">":50,"<":51,"Expr_prima":52,"+":53,"-":54,"DIV":55,"MOD":56,"OR":57,"AND":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"DIVSIGN",10:"ORSIGN",12:"@",16:"::",17:"*",18:"DIR",19:"TEXT",20:"(",21:")",22:"NODE",23:"POSITION",24:"LAST",25:"ID",26:"NUMBER",27:"STRING",28:"STRING2",29:"DECIMAL",30:"CHILD",31:"DESCENDANT",32:"ANCESTOR",33:"PRECEDING",34:"FOLLOWING",35:"NAMESPACE",36:"SELF",37:"PARENT",38:"ATTR",42:"[",44:"]",46:"<=",47:">=",48:"=",49:"!=",50:">",51:"<",53:"+",54:"-",55:"DIV",56:"MOD",57:"OR",58:"AND"},
productions_: [0,[3,2],[4,2],[4,1],[7,2],[9,4],[9,3],[9,0],[8,1],[8,3],[8,3],[8,3],[8,2],[11,2],[11,2],[11,3],[11,3],[11,3],[11,3],[11,2],[11,2],[13,1],[13,1],[13,1],[13,1],[13,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[14,1],[14,0],[39,2],[41,2],[41,0],[40,3],[43,3],[43,3],[43,3],[43,3],[43,3],[43,3],[43,1],[45,2],[45,4],[52,3],[52,3],[52,3],[52,3],[52,3],[52,3],[52,3],[52,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{1:[3]},{5:[1,30]},{7:31,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},o($Vm,[2,3]),o($Vm,$Vn,{9:32,6:$Vo,10:$Vp}),o($Vq,[2,8]),{13:35,15:36,17:[1,37],25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},o($Vq,$Vr,{14:39,39:40,40:41,16:[1,38],42:$Vs}),o($Vq,$Vr,{39:40,40:41,14:43,42:$Vs}),o($Vq,$Vr,{39:40,40:41,14:44,42:$Vs}),{20:[1,45]},{20:[1,46]},{20:[1,47]},{20:[1,48]},o($Vq,$Vr,{39:40,40:41,14:49,42:$Vs}),o($Vt,[2,26]),o($Vt,[2,27]),o($Vt,[2,28]),o($Vt,[2,29]),o($Vt,[2,30]),o($Vt,[2,31]),o($Vt,[2,32]),o($Vt,[2,33]),o($Vt,[2,34]),o($Vu,[2,21]),o($Vu,[2,22]),o($Vu,[2,23]),o($Vu,[2,24]),o($Vu,[2,25]),{1:[2,1]},o($Vm,[2,2]),o($Vm,[2,4]),{6:[1,50]},{8:51,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},o($Vq,$Vr,{39:40,40:41,14:52,42:$Vs}),o($Vq,$Vr,{39:40,40:41,14:53,42:$Vs}),o($Vq,[2,12]),{11:54,13:9,15:55,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},o($Vq,[2,19]),o($Vq,[2,35]),o($Vq,$Vv,{41:56,40:57,42:$Vs}),{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,43:58,45:59},o($Vq,[2,13]),o($Vq,[2,14]),{21:[1,62]},{21:[1,63]},{21:[1,64]},{21:[1,65]},o($Vq,[2,20]),{8:66,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},o($Vm,$Vn,{9:67,6:$Vo,10:$Vp}),o($Vq,[2,9]),o($Vq,[2,11]),o($Vq,[2,10]),o($Vq,$Vr,{14:39,39:40,40:41,42:$Vs}),o($Vq,[2,37]),o($Vq,$Vv,{40:57,41:68,42:$Vs}),{44:[1,69]},{44:[2,47],46:[1,70],47:[1,71],48:[1,72],49:[1,73],50:[1,74],51:[1,75]},o($Vx,$Vy,{52:76,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,45:84},o($Vq,[2,15]),o($Vq,[2,16]),o($Vq,[2,17]),o($Vq,[2,18]),o($Vm,$Vn,{9:85,6:$Vo,10:$Vp}),o($Vm,[2,6]),o($Vq,[2,38]),o($Vu,[2,40]),{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,45:86},{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,45:87},{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,45:88},{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,45:89},{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,45:90},{4:60,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,20:$Vw,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,45:91},o($Vx,[2,48]),{4:92,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{4:93,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{4:94,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{4:95,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{4:96,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{4:97,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{4:98,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,19:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl},{21:[1,99]},o($Vm,[2,5]),{44:[2,41]},{44:[2,42]},{44:[2,43]},{44:[2,44]},{44:[2,45]},{44:[2,46]},o($Vx,$Vy,{52:100,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,$Vy,{52:101,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,$Vy,{52:102,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,$Vy,{52:103,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,$Vy,{52:104,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,$Vy,{52:105,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,$Vy,{52:106,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,$Vy,{52:107,17:$Vz,53:$VA,54:$VB,55:$VC,56:$VD,57:$VE,58:$VF}),o($Vx,[2,50]),o($Vx,[2,51]),o($Vx,[2,52]),o($Vx,[2,53]),o($Vx,[2,54]),o($Vx,[2,55]),o($Vx,[2,56]),o($Vx,[2,49])],
defaultActions: {30:[2,1],86:[2,41],87:[2,42],88:[2,43],89:[2,44],90:[2,45],91:[2,46]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 29
break;
case 2:return 26
break;
case 3:return 27
break;
case 4:return 28
break;
case 5:return 6
break;
case 6:return 18
break;
case 7:return 32
break;
case 8:return 34
break;
case 9:return 33
break;
case 10:return 10
break;
case 11:return 12
break;
case 12:return 17
break;
case 13:return 16
break;
case 14:return 54
break;
case 15:return 53
break;
case 16:return 46
break;
case 17:return 47
break;
case 18:return 51
break;
case 19:return 50
break;
case 20:return 49
break;
case 21:return 48
break;
case 22:return 57
break;
case 23:return 58
break;
case 24:return 56
break;
case 25:return 55
break;
case 26:return 20
break;
case 27:return 21 
break;
case 28:return 42
break;
case 29:return 44
break;
case 30:return 30
break;
case 31:return 38
break;
case 32:return 31
break;
case 33:return 35
break;
case 34:return 37
break;
case 35:return 36
break;
case 36:return 19
break;
case 37:return 23
break;
case 38:return 24
break;
case 39:return 22
break;
case 40:return 25;
break;
case 41:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:([0-9]+(\.[0-9]+)?))/,/^(?:([0-9]+))/,/^(?:(([\"][^"]*[\"])))/,/^(?:(([\'][^\']*[\'])))/,/^(?:((\/)(\/)?))/,/^(?:((\.)(\.)?))/,/^(?:((ancestor)(-or-self)?))/,/^(?:((following)(-sibling)?))/,/^(?:((preceding)(-sibling)?))/,/^(?:((\|)(\|)?))/,/^(?:@)/,/^(?:\*)/,/^(?:::)/,/^(?:-)/,/^(?:\+)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:!=)/,/^(?:=)/,/^(?:or\b)/,/^(?:and\b)/,/^(?:mod\b)/,/^(?:div\b)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:child\b)/,/^(?:attribute\b)/,/^(?:descendant\b)/,/^(?:namespace\b)/,/^(?:parent\b)/,/^(?:self\b)/,/^(?:text\b)/,/^(?:position\b)/,/^(?:last\b)/,/^(?:node\b)/,/^(?:([a-zA-Z_])[a-zA-Z0-9_ñÑ.]*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = xPathDesc;
exports.Parser = xPathDesc.Parser;
exports.parse = function () { return xPathDesc.parse.apply(xPathDesc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
   // var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    //return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}