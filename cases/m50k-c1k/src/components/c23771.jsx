import React from 'react';
const LABEL_23771 = 'component_23771';
export function Component23771({ value = 23771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23771, 'data-value': derived.doubled }, children);
}
export default Component23771;
