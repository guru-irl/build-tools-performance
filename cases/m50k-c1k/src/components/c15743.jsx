import React from 'react';
const LABEL_15743 = 'component_15743';
export function Component15743({ value = 15743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15743, 'data-value': derived.doubled }, children);
}
export default Component15743;
