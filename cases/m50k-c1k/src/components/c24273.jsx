import React from 'react';
const LABEL_24273 = 'component_24273';
export function Component24273({ value = 24273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24273, 'data-value': derived.doubled }, children);
}
export default Component24273;
