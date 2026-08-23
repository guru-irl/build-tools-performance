import React from 'react';
const LABEL_2038 = 'component_2038';
export function Component2038({ value = 2038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2038, 'data-value': derived.doubled }, children);
}
export default Component2038;
