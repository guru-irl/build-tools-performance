import React from 'react';
const LABEL_33242 = 'component_33242';
export function Component33242({ value = 33242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33242, 'data-value': derived.doubled }, children);
}
export default Component33242;
