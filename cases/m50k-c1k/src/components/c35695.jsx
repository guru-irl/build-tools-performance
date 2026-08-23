import React from 'react';
const LABEL_35695 = 'component_35695';
export function Component35695({ value = 35695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35695, 'data-value': derived.doubled }, children);
}
export default Component35695;
