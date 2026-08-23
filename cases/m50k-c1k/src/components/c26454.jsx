import React from 'react';
const LABEL_26454 = 'component_26454';
export function Component26454({ value = 26454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26454, 'data-value': derived.doubled }, children);
}
export default Component26454;
