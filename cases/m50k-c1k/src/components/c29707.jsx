import React from 'react';
const LABEL_29707 = 'component_29707';
export function Component29707({ value = 29707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29707, 'data-value': derived.doubled }, children);
}
export default Component29707;
