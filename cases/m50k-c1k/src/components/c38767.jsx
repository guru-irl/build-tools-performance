import React from 'react';
const LABEL_38767 = 'component_38767';
export function Component38767({ value = 38767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38767, 'data-value': derived.doubled }, children);
}
export default Component38767;
