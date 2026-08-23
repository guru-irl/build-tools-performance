import React from 'react';
const LABEL_9995 = 'component_9995';
export function Component9995({ value = 9995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9995, 'data-value': derived.doubled }, children);
}
export default Component9995;
