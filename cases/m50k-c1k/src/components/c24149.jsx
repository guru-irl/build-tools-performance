import React from 'react';
const LABEL_24149 = 'component_24149';
export function Component24149({ value = 24149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24149, 'data-value': derived.doubled }, children);
}
export default Component24149;
