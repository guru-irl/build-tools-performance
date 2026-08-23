import React from 'react';
const LABEL_26891 = 'component_26891';
export function Component26891({ value = 26891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26891, 'data-value': derived.doubled }, children);
}
export default Component26891;
