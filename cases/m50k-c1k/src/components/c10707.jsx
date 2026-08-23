import React from 'react';
const LABEL_10707 = 'component_10707';
export function Component10707({ value = 10707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10707, 'data-value': derived.doubled }, children);
}
export default Component10707;
