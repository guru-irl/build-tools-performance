import React from 'react';
const LABEL_42778 = 'component_42778';
export function Component42778({ value = 42778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42778, 'data-value': derived.doubled }, children);
}
export default Component42778;
