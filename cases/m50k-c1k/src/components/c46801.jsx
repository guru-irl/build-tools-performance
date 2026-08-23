import React from 'react';
const LABEL_46801 = 'component_46801';
export function Component46801({ value = 46801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46801, 'data-value': derived.doubled }, children);
}
export default Component46801;
