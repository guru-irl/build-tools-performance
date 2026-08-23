import React from 'react';
const LABEL_33038 = 'component_33038';
export function Component33038({ value = 33038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33038, 'data-value': derived.doubled }, children);
}
export default Component33038;
