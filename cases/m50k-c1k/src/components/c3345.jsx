import React from 'react';
const LABEL_3345 = 'component_3345';
export function Component3345({ value = 3345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3345, 'data-value': derived.doubled }, children);
}
export default Component3345;
