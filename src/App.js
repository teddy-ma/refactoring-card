import React from 'react';
import Card from './Card';
import './App.css';

function App() {
  const cards = [
    "change-function-declaration",
    "change-reference-to-value",
    "change-value-to-reference",
    "collapse-hierarchy",
    "combine-functions-into-class",
    "combine-functions-into-transform",
    "consolidate-conditional-expression",
    "decompose-conditional",
    "encapsulate-collection",
    "encapsulate-record",
    "encapsulate-variable",
    "extract-class",
    "extract-funcation",
    "extract-superclass",
    "extract-variable",
    "hide-delegate",
    "inline-class",
    "inline-function",
    "inline-variable",
    "introduce-assertion",
    "introduce-parameter-object",
    "introduce-special-case",
    "move-field",
    "move-function",
    "move-statements-into-function",
    "move-statements-to-callers",
    "parameterize-function",
    "preserve-whole-object",
    "pull-up-constructor-body",
    "pull-up-field",
    "pull-up-method",
    "push-down-field",
    "push-down-method",
    "remove-dead-code",
    "remove-flag-argument",
    "remove-middle-man",
    "remove-setting-method",
    "remove-subclass",
    "rename-field",
    "rename-variable",
    "replace-command-with-function",
    "replace-conditional-with-polymorphism",
    "replace-constructor-with-factory-function",
    "replace-control-flag-with-break",
    "replace-derived-variable-with-query",
    "replace-error-code-with-exception",
    "replace-exception-with-precheck",
    "replace-function-with-command",
    "replace-inline-code-with-function-call",
    "replace-loop-with-pipeline",
    "replace-magic-literal",
    "replace-nested-conditional-with-guard-clauses",
    "replace-parameter-with-query",
    "replace-primitive-with-object",
    "replace-query-with-parameter",
    "replace-subclass-with-delegate",
    "replace-superclass-with-delegate",
    "replace-temp-with-query",
    "replace-type-code-with-subclasses",
    "return-modified-value",
    "separate-query-from-modifier",
    "slide-statements",
    "split-loop",
    "split-phase",
    "split-variable",
  ]


  return (
    <div className="App">
        {cards.map((card) => (
          <Card key={card} name={card} />
        ))}
    </div>
  );
}

export default App;
