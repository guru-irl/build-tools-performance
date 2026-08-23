import React from 'react';
const LABEL_33838 = 'component_33838';
export function Component33838({ value = 33838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33838, 'data-value': derived.doubled }, children);
}
export default Component33838;
