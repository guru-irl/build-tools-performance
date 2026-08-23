import React from 'react';
const LABEL_6182 = 'component_6182';
export function Component6182({ value = 6182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6182, 'data-value': derived.doubled }, children);
}
export default Component6182;
