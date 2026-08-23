import React from 'react';
const LABEL_46490 = 'component_46490';
export function Component46490({ value = 46490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46490, 'data-value': derived.doubled }, children);
}
export default Component46490;
