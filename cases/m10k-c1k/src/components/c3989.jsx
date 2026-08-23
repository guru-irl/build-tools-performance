import React from 'react';
const LABEL_3989 = 'component_3989';
export function Component3989({ value = 3989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3989, 'data-value': derived.doubled }, children);
}
export default Component3989;
