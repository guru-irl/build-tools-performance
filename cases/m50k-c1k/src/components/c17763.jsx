import React from 'react';
const LABEL_17763 = 'component_17763';
export function Component17763({ value = 17763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17763, 'data-value': derived.doubled }, children);
}
export default Component17763;
