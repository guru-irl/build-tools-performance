import React from 'react';
const LABEL_4268 = 'component_4268';
export function Component4268({ value = 4268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4268, 'data-value': derived.doubled }, children);
}
export default Component4268;
