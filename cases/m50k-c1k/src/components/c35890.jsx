import React from 'react';
const LABEL_35890 = 'component_35890';
export function Component35890({ value = 35890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35890, 'data-value': derived.doubled }, children);
}
export default Component35890;
