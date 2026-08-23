import React from 'react';
const LABEL_24038 = 'component_24038';
export function Component24038({ value = 24038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24038, 'data-value': derived.doubled }, children);
}
export default Component24038;
