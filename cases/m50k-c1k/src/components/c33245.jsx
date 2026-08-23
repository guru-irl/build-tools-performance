import React from 'react';
const LABEL_33245 = 'component_33245';
export function Component33245({ value = 33245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33245, 'data-value': derived.doubled }, children);
}
export default Component33245;
