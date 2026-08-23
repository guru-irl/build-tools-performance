import React from 'react';
const LABEL_14206 = 'component_14206';
export function Component14206({ value = 14206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14206, 'data-value': derived.doubled }, children);
}
export default Component14206;
