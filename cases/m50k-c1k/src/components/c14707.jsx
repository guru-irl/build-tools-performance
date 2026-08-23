import React from 'react';
const LABEL_14707 = 'component_14707';
export function Component14707({ value = 14707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14707, 'data-value': derived.doubled }, children);
}
export default Component14707;
