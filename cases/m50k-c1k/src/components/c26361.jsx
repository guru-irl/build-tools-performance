import React from 'react';
const LABEL_26361 = 'component_26361';
export function Component26361({ value = 26361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26361, 'data-value': derived.doubled }, children);
}
export default Component26361;
