import React from 'react';
const LABEL_26771 = 'component_26771';
export function Component26771({ value = 26771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26771, 'data-value': derived.doubled }, children);
}
export default Component26771;
