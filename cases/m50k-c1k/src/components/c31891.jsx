import React from 'react';
const LABEL_31891 = 'component_31891';
export function Component31891({ value = 31891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31891, 'data-value': derived.doubled }, children);
}
export default Component31891;
