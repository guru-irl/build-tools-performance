import React from 'react';
const LABEL_17038 = 'component_17038';
export function Component17038({ value = 17038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17038, 'data-value': derived.doubled }, children);
}
export default Component17038;
