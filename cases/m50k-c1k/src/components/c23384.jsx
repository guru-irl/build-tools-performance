import React from 'react';
const LABEL_23384 = 'component_23384';
export function Component23384({ value = 23384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23384, 'data-value': derived.doubled }, children);
}
export default Component23384;
