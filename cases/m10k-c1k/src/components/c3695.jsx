import React from 'react';
const LABEL_3695 = 'component_3695';
export function Component3695({ value = 3695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3695, 'data-value': derived.doubled }, children);
}
export default Component3695;
