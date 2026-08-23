import React from 'react';
const LABEL_23468 = 'component_23468';
export function Component23468({ value = 23468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23468, 'data-value': derived.doubled }, children);
}
export default Component23468;
