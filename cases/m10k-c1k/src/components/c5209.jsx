import React from 'react';
const LABEL_5209 = 'component_5209';
export function Component5209({ value = 5209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5209, 'data-value': derived.doubled }, children);
}
export default Component5209;
