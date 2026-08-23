import React from 'react';
const LABEL_19535 = 'component_19535';
export function Component19535({ value = 19535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19535, 'data-value': derived.doubled }, children);
}
export default Component19535;
