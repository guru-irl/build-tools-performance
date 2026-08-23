import React from 'react';
const LABEL_44454 = 'component_44454';
export function Component44454({ value = 44454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44454, 'data-value': derived.doubled }, children);
}
export default Component44454;
