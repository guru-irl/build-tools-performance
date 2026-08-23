import React from 'react';
const LABEL_3928 = 'component_3928';
export function Component3928({ value = 3928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3928, 'data-value': derived.doubled }, children);
}
export default Component3928;
