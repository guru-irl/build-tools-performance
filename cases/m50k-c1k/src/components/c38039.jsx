import React from 'react';
const LABEL_38039 = 'component_38039';
export function Component38039({ value = 38039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38039, 'data-value': derived.doubled }, children);
}
export default Component38039;
