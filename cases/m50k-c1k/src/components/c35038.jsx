import React from 'react';
const LABEL_35038 = 'component_35038';
export function Component35038({ value = 35038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35038, 'data-value': derived.doubled }, children);
}
export default Component35038;
