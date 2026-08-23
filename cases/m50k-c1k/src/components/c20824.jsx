import React from 'react';
const LABEL_20824 = 'component_20824';
export function Component20824({ value = 20824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20824, 'data-value': derived.doubled }, children);
}
export default Component20824;
