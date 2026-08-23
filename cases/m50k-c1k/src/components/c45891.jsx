import React from 'react';
const LABEL_45891 = 'component_45891';
export function Component45891({ value = 45891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45891, 'data-value': derived.doubled }, children);
}
export default Component45891;
