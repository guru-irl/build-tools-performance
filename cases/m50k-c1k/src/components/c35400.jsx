import React from 'react';
const LABEL_35400 = 'component_35400';
export function Component35400({ value = 35400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35400, 'data-value': derived.doubled }, children);
}
export default Component35400;
