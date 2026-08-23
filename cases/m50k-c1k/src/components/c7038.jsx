import React from 'react';
const LABEL_7038 = 'component_7038';
export function Component7038({ value = 7038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7038, 'data-value': derived.doubled }, children);
}
export default Component7038;
