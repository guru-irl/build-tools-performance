import React from 'react';
const LABEL_9038 = 'component_9038';
export function Component9038({ value = 9038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9038, 'data-value': derived.doubled }, children);
}
export default Component9038;
