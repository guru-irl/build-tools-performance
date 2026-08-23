import React from 'react';
const LABEL_42707 = 'component_42707';
export function Component42707({ value = 42707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42707, 'data-value': derived.doubled }, children);
}
export default Component42707;
