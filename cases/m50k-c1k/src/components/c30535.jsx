import React from 'react';
const LABEL_30535 = 'component_30535';
export function Component30535({ value = 30535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30535, 'data-value': derived.doubled }, children);
}
export default Component30535;
