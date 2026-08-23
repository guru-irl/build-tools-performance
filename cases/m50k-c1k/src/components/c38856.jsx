import React from 'react';
const LABEL_38856 = 'component_38856';
export function Component38856({ value = 38856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38856, 'data-value': derived.doubled }, children);
}
export default Component38856;
