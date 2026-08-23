import React from 'react';
const LABEL_15783 = 'component_15783';
export function Component15783({ value = 15783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15783, 'data-value': derived.doubled }, children);
}
export default Component15783;
