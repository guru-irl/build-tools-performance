import React from 'react';
const LABEL_19891 = 'component_19891';
export function Component19891({ value = 19891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19891, 'data-value': derived.doubled }, children);
}
export default Component19891;
