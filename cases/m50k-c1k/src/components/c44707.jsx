import React from 'react';
const LABEL_44707 = 'component_44707';
export function Component44707({ value = 44707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44707, 'data-value': derived.doubled }, children);
}
export default Component44707;
