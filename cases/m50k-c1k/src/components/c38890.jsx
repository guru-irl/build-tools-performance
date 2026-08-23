import React from 'react';
const LABEL_38890 = 'component_38890';
export function Component38890({ value = 38890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38890, 'data-value': derived.doubled }, children);
}
export default Component38890;
