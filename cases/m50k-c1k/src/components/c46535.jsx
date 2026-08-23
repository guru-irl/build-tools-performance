import React from 'react';
const LABEL_46535 = 'component_46535';
export function Component46535({ value = 46535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46535, 'data-value': derived.doubled }, children);
}
export default Component46535;
