import React from 'react';
const LABEL_4535 = 'component_4535';
export function Component4535({ value = 4535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4535, 'data-value': derived.doubled }, children);
}
export default Component4535;
