import React from 'react';
const LABEL_24707 = 'component_24707';
export function Component24707({ value = 24707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24707, 'data-value': derived.doubled }, children);
}
export default Component24707;
