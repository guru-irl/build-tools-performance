import React from 'react';
const LABEL_26707 = 'component_26707';
export function Component26707({ value = 26707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26707, 'data-value': derived.doubled }, children);
}
export default Component26707;
