import React from 'react';
const LABEL_1270 = 'component_1270';
export function Component1270({ value = 1270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1270, 'data-value': derived.doubled }, children);
}
export default Component1270;
