import React from 'react';
const LABEL_38989 = 'component_38989';
export function Component38989({ value = 38989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38989, 'data-value': derived.doubled }, children);
}
export default Component38989;
