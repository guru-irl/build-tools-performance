import React from 'react';
const LABEL_37535 = 'component_37535';
export function Component37535({ value = 37535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37535, 'data-value': derived.doubled }, children);
}
export default Component37535;
