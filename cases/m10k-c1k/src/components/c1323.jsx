import React from 'react';
const LABEL_1323 = 'component_1323';
export function Component1323({ value = 1323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1323, 'data-value': derived.doubled }, children);
}
export default Component1323;
