import React from 'react';
const LABEL_15882 = 'component_15882';
export function Component15882({ value = 15882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15882, 'data-value': derived.doubled }, children);
}
export default Component15882;
