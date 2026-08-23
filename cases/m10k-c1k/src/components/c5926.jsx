import React from 'react';
const LABEL_5926 = 'component_5926';
export function Component5926({ value = 5926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5926, 'data-value': derived.doubled }, children);
}
export default Component5926;
