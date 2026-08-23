import React from 'react';
const LABEL_16891 = 'component_16891';
export function Component16891({ value = 16891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16891, 'data-value': derived.doubled }, children);
}
export default Component16891;
