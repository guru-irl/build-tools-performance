import React from 'react';
const LABEL_6291 = 'component_6291';
export function Component6291({ value = 6291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6291, 'data-value': derived.doubled }, children);
}
export default Component6291;
