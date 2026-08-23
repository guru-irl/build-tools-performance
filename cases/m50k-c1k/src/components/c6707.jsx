import React from 'react';
const LABEL_6707 = 'component_6707';
export function Component6707({ value = 6707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6707, 'data-value': derived.doubled }, children);
}
export default Component6707;
