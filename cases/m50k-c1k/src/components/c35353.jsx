import React from 'react';
const LABEL_35353 = 'component_35353';
export function Component35353({ value = 35353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35353, 'data-value': derived.doubled }, children);
}
export default Component35353;
