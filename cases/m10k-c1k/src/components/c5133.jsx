import React from 'react';
const LABEL_5133 = 'component_5133';
export function Component5133({ value = 5133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5133, 'data-value': derived.doubled }, children);
}
export default Component5133;
