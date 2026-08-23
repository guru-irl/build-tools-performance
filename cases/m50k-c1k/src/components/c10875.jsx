import React from 'react';
const LABEL_10875 = 'component_10875';
export function Component10875({ value = 10875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10875, 'data-value': derived.doubled }, children);
}
export default Component10875;
