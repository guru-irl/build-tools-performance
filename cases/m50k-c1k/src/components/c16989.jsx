import React from 'react';
const LABEL_16989 = 'component_16989';
export function Component16989({ value = 16989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16989, 'data-value': derived.doubled }, children);
}
export default Component16989;
