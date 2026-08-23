import React from 'react';
const LABEL_23182 = 'component_23182';
export function Component23182({ value = 23182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23182, 'data-value': derived.doubled }, children);
}
export default Component23182;
