import React from 'react';
const LABEL_33728 = 'component_33728';
export function Component33728({ value = 33728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33728, 'data-value': derived.doubled }, children);
}
export default Component33728;
