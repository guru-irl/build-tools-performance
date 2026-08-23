import React from 'react';
const LABEL_28034 = 'component_28034';
export function Component28034({ value = 28034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28034, 'data-value': derived.doubled }, children);
}
export default Component28034;
