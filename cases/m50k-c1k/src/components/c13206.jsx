import React from 'react';
const LABEL_13206 = 'component_13206';
export function Component13206({ value = 13206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13206, 'data-value': derived.doubled }, children);
}
export default Component13206;
