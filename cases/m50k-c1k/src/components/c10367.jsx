import React from 'react';
const LABEL_10367 = 'component_10367';
export function Component10367({ value = 10367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10367, 'data-value': derived.doubled }, children);
}
export default Component10367;
