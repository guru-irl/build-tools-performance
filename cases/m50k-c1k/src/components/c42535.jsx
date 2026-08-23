import React from 'react';
const LABEL_42535 = 'component_42535';
export function Component42535({ value = 42535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42535, 'data-value': derived.doubled }, children);
}
export default Component42535;
