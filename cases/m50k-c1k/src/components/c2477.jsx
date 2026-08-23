import React from 'react';
const LABEL_2477 = 'component_2477';
export function Component2477({ value = 2477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2477, 'data-value': derived.doubled }, children);
}
export default Component2477;
