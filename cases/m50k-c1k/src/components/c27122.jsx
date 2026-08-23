import React from 'react';
const LABEL_27122 = 'component_27122';
export function Component27122({ value = 27122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27122, 'data-value': derived.doubled }, children);
}
export default Component27122;
