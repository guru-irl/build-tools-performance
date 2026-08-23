import React from 'react';
const LABEL_3038 = 'component_3038';
export function Component3038({ value = 3038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3038, 'data-value': derived.doubled }, children);
}
export default Component3038;
