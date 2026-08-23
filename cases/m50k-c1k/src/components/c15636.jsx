import React from 'react';
const LABEL_15636 = 'component_15636';
export function Component15636({ value = 15636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15636, 'data-value': derived.doubled }, children);
}
export default Component15636;
