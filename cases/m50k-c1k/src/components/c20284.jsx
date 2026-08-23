import React from 'react';
const LABEL_20284 = 'component_20284';
export function Component20284({ value = 20284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20284, 'data-value': derived.doubled }, children);
}
export default Component20284;
