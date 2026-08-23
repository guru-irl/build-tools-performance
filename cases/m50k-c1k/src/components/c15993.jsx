import React from 'react';
const LABEL_15993 = 'component_15993';
export function Component15993({ value = 15993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15993, 'data-value': derived.doubled }, children);
}
export default Component15993;
