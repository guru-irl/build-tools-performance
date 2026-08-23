import React from 'react';
const LABEL_5707 = 'component_5707';
export function Component5707({ value = 5707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5707, 'data-value': derived.doubled }, children);
}
export default Component5707;
