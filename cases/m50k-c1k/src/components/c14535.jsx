import React from 'react';
const LABEL_14535 = 'component_14535';
export function Component14535({ value = 14535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14535, 'data-value': derived.doubled }, children);
}
export default Component14535;
