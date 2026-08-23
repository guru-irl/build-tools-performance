import React from 'react';
const LABEL_26464 = 'component_26464';
export function Component26464({ value = 26464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26464, 'data-value': derived.doubled }, children);
}
export default Component26464;
