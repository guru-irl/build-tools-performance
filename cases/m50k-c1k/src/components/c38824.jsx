import React from 'react';
const LABEL_38824 = 'component_38824';
export function Component38824({ value = 38824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38824, 'data-value': derived.doubled }, children);
}
export default Component38824;
