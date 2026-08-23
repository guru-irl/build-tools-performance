import React from 'react';
const LABEL_6891 = 'component_6891';
export function Component6891({ value = 6891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6891, 'data-value': derived.doubled }, children);
}
export default Component6891;
