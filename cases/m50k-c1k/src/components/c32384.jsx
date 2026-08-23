import React from 'react';
const LABEL_32384 = 'component_32384';
export function Component32384({ value = 32384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32384, 'data-value': derived.doubled }, children);
}
export default Component32384;
