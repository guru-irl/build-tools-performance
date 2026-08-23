import React from 'react';
const LABEL_9384 = 'component_9384';
export function Component9384({ value = 9384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9384, 'data-value': derived.doubled }, children);
}
export default Component9384;
