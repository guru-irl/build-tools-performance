import React from 'react';
const LABEL_25038 = 'component_25038';
export function Component25038({ value = 25038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25038, 'data-value': derived.doubled }, children);
}
export default Component25038;
