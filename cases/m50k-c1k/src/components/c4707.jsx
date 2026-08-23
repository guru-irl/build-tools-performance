import React from 'react';
const LABEL_4707 = 'component_4707';
export function Component4707({ value = 4707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4707, 'data-value': derived.doubled }, children);
}
export default Component4707;
