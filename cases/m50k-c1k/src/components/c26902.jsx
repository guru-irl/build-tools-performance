import React from 'react';
const LABEL_26902 = 'component_26902';
export function Component26902({ value = 26902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26902, 'data-value': derived.doubled }, children);
}
export default Component26902;
