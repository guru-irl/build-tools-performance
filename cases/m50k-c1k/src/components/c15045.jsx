import React from 'react';
const LABEL_15045 = 'component_15045';
export function Component15045({ value = 15045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15045, 'data-value': derived.doubled }, children);
}
export default Component15045;
