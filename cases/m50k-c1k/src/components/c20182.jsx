import React from 'react';
const LABEL_20182 = 'component_20182';
export function Component20182({ value = 20182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20182, 'data-value': derived.doubled }, children);
}
export default Component20182;
