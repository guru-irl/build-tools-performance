import React from 'react';
const LABEL_23695 = 'component_23695';
export function Component23695({ value = 23695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23695, 'data-value': derived.doubled }, children);
}
export default Component23695;
