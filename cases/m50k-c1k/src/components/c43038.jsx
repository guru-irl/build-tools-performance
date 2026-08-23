import React from 'react';
const LABEL_43038 = 'component_43038';
export function Component43038({ value = 43038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43038, 'data-value': derived.doubled }, children);
}
export default Component43038;
