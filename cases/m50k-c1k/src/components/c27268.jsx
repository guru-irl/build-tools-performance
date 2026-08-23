import React from 'react';
const LABEL_27268 = 'component_27268';
export function Component27268({ value = 27268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27268, 'data-value': derived.doubled }, children);
}
export default Component27268;
