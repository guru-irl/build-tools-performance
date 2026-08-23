import React from 'react';
const LABEL_16771 = 'component_16771';
export function Component16771({ value = 16771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16771, 'data-value': derived.doubled }, children);
}
export default Component16771;
