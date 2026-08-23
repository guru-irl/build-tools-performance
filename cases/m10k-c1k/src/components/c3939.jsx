import React from 'react';
const LABEL_3939 = 'component_3939';
export function Component3939({ value = 3939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3939, 'data-value': derived.doubled }, children);
}
export default Component3939;
