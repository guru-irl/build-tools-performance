import React from 'react';
const LABEL_20652 = 'component_20652';
export function Component20652({ value = 20652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20652, 'data-value': derived.doubled }, children);
}
export default Component20652;
