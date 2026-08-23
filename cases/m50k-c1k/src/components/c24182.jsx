import React from 'react';
const LABEL_24182 = 'component_24182';
export function Component24182({ value = 24182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24182, 'data-value': derived.doubled }, children);
}
export default Component24182;
