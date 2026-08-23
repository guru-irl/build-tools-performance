import React from 'react';
const LABEL_12827 = 'component_12827';
export function Component12827({ value = 12827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12827, 'data-value': derived.doubled }, children);
}
export default Component12827;
