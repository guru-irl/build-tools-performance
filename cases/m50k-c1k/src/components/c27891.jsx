import React from 'react';
const LABEL_27891 = 'component_27891';
export function Component27891({ value = 27891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27891, 'data-value': derived.doubled }, children);
}
export default Component27891;
