import React from 'react';
const LABEL_1278 = 'component_1278';
export function Component1278({ value = 1278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1278, 'data-value': derived.doubled }, children);
}
export default Component1278;
