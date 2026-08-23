import React from 'react';
const LABEL_25477 = 'component_25477';
export function Component25477({ value = 25477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25477, 'data-value': derived.doubled }, children);
}
export default Component25477;
