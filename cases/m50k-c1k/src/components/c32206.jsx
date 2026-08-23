import React from 'react';
const LABEL_32206 = 'component_32206';
export function Component32206({ value = 32206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32206, 'data-value': derived.doubled }, children);
}
export default Component32206;
