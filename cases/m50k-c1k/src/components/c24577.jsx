import React from 'react';
const LABEL_24577 = 'component_24577';
export function Component24577({ value = 24577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24577, 'data-value': derived.doubled }, children);
}
export default Component24577;
