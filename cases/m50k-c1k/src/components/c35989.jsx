import React from 'react';
const LABEL_35989 = 'component_35989';
export function Component35989({ value = 35989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35989, 'data-value': derived.doubled }, children);
}
export default Component35989;
