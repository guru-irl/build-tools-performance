import React from 'react';
const LABEL_38707 = 'component_38707';
export function Component38707({ value = 38707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38707, 'data-value': derived.doubled }, children);
}
export default Component38707;
