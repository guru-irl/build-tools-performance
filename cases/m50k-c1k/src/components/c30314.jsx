import React from 'react';
const LABEL_30314 = 'component_30314';
export function Component30314({ value = 30314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30314, 'data-value': derived.doubled }, children);
}
export default Component30314;
