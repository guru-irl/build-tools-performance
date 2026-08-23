import React from 'react';
const LABEL_6074 = 'component_6074';
export function Component6074({ value = 6074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6074, 'data-value': derived.doubled }, children);
}
export default Component6074;
