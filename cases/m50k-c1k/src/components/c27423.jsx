import React from 'react';
const LABEL_27423 = 'component_27423';
export function Component27423({ value = 27423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27423, 'data-value': derived.doubled }, children);
}
export default Component27423;
