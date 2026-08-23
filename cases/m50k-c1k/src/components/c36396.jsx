import React from 'react';
const LABEL_36396 = 'component_36396';
export function Component36396({ value = 36396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36396, 'data-value': derived.doubled }, children);
}
export default Component36396;
