import React from 'react';
const LABEL_430 = 'component_430';
export function Component430({ value = 430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_430, 'data-value': derived.doubled }, children);
}
export default Component430;
