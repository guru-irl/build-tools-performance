import React from 'react';
const LABEL_1504 = 'component_1504';
export function Component1504({ value = 1504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1504, 'data-value': derived.doubled }, children);
}
export default Component1504;
