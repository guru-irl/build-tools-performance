import React from 'react';
const LABEL_14038 = 'component_14038';
export function Component14038({ value = 14038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14038, 'data-value': derived.doubled }, children);
}
export default Component14038;
