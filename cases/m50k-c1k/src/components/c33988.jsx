import React from 'react';
const LABEL_33988 = 'component_33988';
export function Component33988({ value = 33988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33988, 'data-value': derived.doubled }, children);
}
export default Component33988;
