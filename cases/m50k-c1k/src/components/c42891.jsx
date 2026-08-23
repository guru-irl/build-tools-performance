import React from 'react';
const LABEL_42891 = 'component_42891';
export function Component42891({ value = 42891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42891, 'data-value': derived.doubled }, children);
}
export default Component42891;
