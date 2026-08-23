import React from 'react';
const LABEL_35707 = 'component_35707';
export function Component35707({ value = 35707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35707, 'data-value': derived.doubled }, children);
}
export default Component35707;
