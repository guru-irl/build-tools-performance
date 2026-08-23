import React from 'react';
const LABEL_20487 = 'component_20487';
export function Component20487({ value = 20487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20487, 'data-value': derived.doubled }, children);
}
export default Component20487;
