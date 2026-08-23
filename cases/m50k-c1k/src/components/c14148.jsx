import React from 'react';
const LABEL_14148 = 'component_14148';
export function Component14148({ value = 14148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14148, 'data-value': derived.doubled }, children);
}
export default Component14148;
