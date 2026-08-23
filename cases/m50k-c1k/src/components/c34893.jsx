import React from 'react';
const LABEL_34893 = 'component_34893';
export function Component34893({ value = 34893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34893, 'data-value': derived.doubled }, children);
}
export default Component34893;
