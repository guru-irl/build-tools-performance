import React from 'react';
const LABEL_1291 = 'component_1291';
export function Component1291({ value = 1291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1291, 'data-value': derived.doubled }, children);
}
export default Component1291;
