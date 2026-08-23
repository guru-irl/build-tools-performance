import React from 'react';
const LABEL_15829 = 'component_15829';
export function Component15829({ value = 15829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15829, 'data-value': derived.doubled }, children);
}
export default Component15829;
