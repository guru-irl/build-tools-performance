import React from 'react';
const LABEL_11038 = 'component_11038';
export function Component11038({ value = 11038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11038, 'data-value': derived.doubled }, children);
}
export default Component11038;
