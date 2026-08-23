import React from 'react';
const LABEL_891 = 'component_891';
export function Component891({ value = 891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_891, 'data-value': derived.doubled }, children);
}
export default Component891;
