import React from 'react';
const LABEL_10152 = 'component_10152';
export function Component10152({ value = 10152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10152, 'data-value': derived.doubled }, children);
}
export default Component10152;
