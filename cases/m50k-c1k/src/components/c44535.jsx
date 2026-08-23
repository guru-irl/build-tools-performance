import React from 'react';
const LABEL_44535 = 'component_44535';
export function Component44535({ value = 44535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44535, 'data-value': derived.doubled }, children);
}
export default Component44535;
