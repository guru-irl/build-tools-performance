import React from 'react';
const LABEL_16707 = 'component_16707';
export function Component16707({ value = 16707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16707, 'data-value': derived.doubled }, children);
}
export default Component16707;
