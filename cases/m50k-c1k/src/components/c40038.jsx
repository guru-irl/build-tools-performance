import React from 'react';
const LABEL_40038 = 'component_40038';
export function Component40038({ value = 40038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40038, 'data-value': derived.doubled }, children);
}
export default Component40038;
