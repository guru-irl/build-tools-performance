import React from 'react';
const LABEL_20647 = 'component_20647';
export function Component20647({ value = 20647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20647, 'data-value': derived.doubled }, children);
}
export default Component20647;
