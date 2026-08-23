import React from 'react';
const LABEL_11278 = 'component_11278';
export function Component11278({ value = 11278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11278, 'data-value': derived.doubled }, children);
}
export default Component11278;
