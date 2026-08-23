import React from 'react';
const LABEL_462 = 'component_462';
export function Component462({ value = 462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_462, 'data-value': derived.doubled }, children);
}
export default Component462;
