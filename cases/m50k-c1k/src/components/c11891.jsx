import React from 'react';
const LABEL_11891 = 'component_11891';
export function Component11891({ value = 11891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11891, 'data-value': derived.doubled }, children);
}
export default Component11891;
