import React from 'react';
const LABEL_3152 = 'component_3152';
export function Component3152({ value = 3152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3152, 'data-value': derived.doubled }, children);
}
export default Component3152;
