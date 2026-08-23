import React from 'react';
const LABEL_12038 = 'component_12038';
export function Component12038({ value = 12038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12038, 'data-value': derived.doubled }, children);
}
export default Component12038;
