import React from 'react';
const LABEL_1206 = 'component_1206';
export function Component1206({ value = 1206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1206, 'data-value': derived.doubled }, children);
}
export default Component1206;
