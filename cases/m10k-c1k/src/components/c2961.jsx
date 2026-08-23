import React from 'react';
const LABEL_2961 = 'component_2961';
export function Component2961({ value = 2961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2961, 'data-value': derived.doubled }, children);
}
export default Component2961;
