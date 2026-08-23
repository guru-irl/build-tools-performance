import React from 'react';
const LABEL_26182 = 'component_26182';
export function Component26182({ value = 26182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26182, 'data-value': derived.doubled }, children);
}
export default Component26182;
