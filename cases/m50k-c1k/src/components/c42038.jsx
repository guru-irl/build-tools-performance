import React from 'react';
const LABEL_42038 = 'component_42038';
export function Component42038({ value = 42038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42038, 'data-value': derived.doubled }, children);
}
export default Component42038;
