import React from 'react';
const LABEL_1228 = 'component_1228';
export function Component1228({ value = 1228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1228, 'data-value': derived.doubled }, children);
}
export default Component1228;
