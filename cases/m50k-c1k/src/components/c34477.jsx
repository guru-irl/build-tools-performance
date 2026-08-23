import React from 'react';
const LABEL_34477 = 'component_34477';
export function Component34477({ value = 34477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34477, 'data-value': derived.doubled }, children);
}
export default Component34477;
