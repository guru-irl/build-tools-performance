import React from 'react';
const LABEL_3785 = 'component_3785';
export function Component3785({ value = 3785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3785, 'data-value': derived.doubled }, children);
}
export default Component3785;
