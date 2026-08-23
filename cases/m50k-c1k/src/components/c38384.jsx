import React from 'react';
const LABEL_38384 = 'component_38384';
export function Component38384({ value = 38384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38384, 'data-value': derived.doubled }, children);
}
export default Component38384;
