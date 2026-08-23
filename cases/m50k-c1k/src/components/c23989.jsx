import React from 'react';
const LABEL_23989 = 'component_23989';
export function Component23989({ value = 23989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23989, 'data-value': derived.doubled }, children);
}
export default Component23989;
