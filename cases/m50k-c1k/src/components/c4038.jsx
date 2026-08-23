import React from 'react';
const LABEL_4038 = 'component_4038';
export function Component4038({ value = 4038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4038, 'data-value': derived.doubled }, children);
}
export default Component4038;
