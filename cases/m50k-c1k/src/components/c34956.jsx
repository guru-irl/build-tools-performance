import React from 'react';
const LABEL_34956 = 'component_34956';
export function Component34956({ value = 34956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34956, 'data-value': derived.doubled }, children);
}
export default Component34956;
