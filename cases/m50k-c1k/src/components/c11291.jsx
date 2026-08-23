import React from 'react';
const LABEL_11291 = 'component_11291';
export function Component11291({ value = 11291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11291, 'data-value': derived.doubled }, children);
}
export default Component11291;
