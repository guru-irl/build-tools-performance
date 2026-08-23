import React from 'react';
const LABEL_43891 = 'component_43891';
export function Component43891({ value = 43891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43891, 'data-value': derived.doubled }, children);
}
export default Component43891;
