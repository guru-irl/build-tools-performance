import React from 'react';
const LABEL_13890 = 'component_13890';
export function Component13890({ value = 13890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13890, 'data-value': derived.doubled }, children);
}
export default Component13890;
