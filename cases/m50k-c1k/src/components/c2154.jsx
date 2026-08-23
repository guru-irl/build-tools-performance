import React from 'react';
const LABEL_2154 = 'component_2154';
export function Component2154({ value = 2154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2154, 'data-value': derived.doubled }, children);
}
export default Component2154;
