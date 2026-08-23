import React from 'react';
const LABEL_30396 = 'component_30396';
export function Component30396({ value = 30396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30396, 'data-value': derived.doubled }, children);
}
export default Component30396;
