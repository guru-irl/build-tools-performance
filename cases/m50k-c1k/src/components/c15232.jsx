import React from 'react';
const LABEL_15232 = 'component_15232';
export function Component15232({ value = 15232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15232, 'data-value': derived.doubled }, children);
}
export default Component15232;
