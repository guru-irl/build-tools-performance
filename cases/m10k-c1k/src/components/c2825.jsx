import React from 'react';
const LABEL_2825 = 'component_2825';
export function Component2825({ value = 2825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2825, 'data-value': derived.doubled }, children);
}
export default Component2825;
