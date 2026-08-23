import React from 'react';
const LABEL_15890 = 'component_15890';
export function Component15890({ value = 15890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15890, 'data-value': derived.doubled }, children);
}
export default Component15890;
