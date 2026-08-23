import React from 'react';
const LABEL_33993 = 'component_33993';
export function Component33993({ value = 33993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33993, 'data-value': derived.doubled }, children);
}
export default Component33993;
