import React from 'react';
const LABEL_28256 = 'component_28256';
export function Component28256({ value = 28256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28256, 'data-value': derived.doubled }, children);
}
export default Component28256;
