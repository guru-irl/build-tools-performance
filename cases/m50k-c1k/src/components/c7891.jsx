import React from 'react';
const LABEL_7891 = 'component_7891';
export function Component7891({ value = 7891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7891, 'data-value': derived.doubled }, children);
}
export default Component7891;
