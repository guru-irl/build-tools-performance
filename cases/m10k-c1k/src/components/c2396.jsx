import React from 'react';
const LABEL_2396 = 'component_2396';
export function Component2396({ value = 2396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2396, 'data-value': derived.doubled }, children);
}
export default Component2396;
