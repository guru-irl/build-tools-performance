import React from 'react';
const LABEL_10182 = 'component_10182';
export function Component10182({ value = 10182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10182, 'data-value': derived.doubled }, children);
}
export default Component10182;
