import React from 'react';
const LABEL_3972 = 'component_3972';
export function Component3972({ value = 3972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3972, 'data-value': derived.doubled }, children);
}
export default Component3972;
