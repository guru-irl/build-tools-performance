import React from 'react';
const LABEL_23250 = 'component_23250';
export function Component23250({ value = 23250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23250, 'data-value': derived.doubled }, children);
}
export default Component23250;
