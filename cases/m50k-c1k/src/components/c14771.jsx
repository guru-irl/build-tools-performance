import React from 'react';
const LABEL_14771 = 'component_14771';
export function Component14771({ value = 14771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14771, 'data-value': derived.doubled }, children);
}
export default Component14771;
