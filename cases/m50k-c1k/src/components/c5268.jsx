import React from 'react';
const LABEL_5268 = 'component_5268';
export function Component5268({ value = 5268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5268, 'data-value': derived.doubled }, children);
}
export default Component5268;
