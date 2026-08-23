import React from 'react';
const LABEL_36038 = 'component_36038';
export function Component36038({ value = 36038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36038, 'data-value': derived.doubled }, children);
}
export default Component36038;
