import React from 'react';
const LABEL_12434 = 'component_12434';
export function Component12434({ value = 12434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12434, 'data-value': derived.doubled }, children);
}
export default Component12434;
