import React from 'react';
const LABEL_26989 = 'component_26989';
export function Component26989({ value = 26989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26989, 'data-value': derived.doubled }, children);
}
export default Component26989;
