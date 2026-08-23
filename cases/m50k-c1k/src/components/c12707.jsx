import React from 'react';
const LABEL_12707 = 'component_12707';
export function Component12707({ value = 12707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12707, 'data-value': derived.doubled }, children);
}
export default Component12707;
