import React from 'react';
const LABEL_24989 = 'component_24989';
export function Component24989({ value = 24989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24989, 'data-value': derived.doubled }, children);
}
export default Component24989;
