import React from 'react';
const LABEL_8707 = 'component_8707';
export function Component8707({ value = 8707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8707, 'data-value': derived.doubled }, children);
}
export default Component8707;
