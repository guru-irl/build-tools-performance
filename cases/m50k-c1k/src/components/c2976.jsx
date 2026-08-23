import React from 'react';
const LABEL_2976 = 'component_2976';
export function Component2976({ value = 2976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2976, 'data-value': derived.doubled }, children);
}
export default Component2976;
