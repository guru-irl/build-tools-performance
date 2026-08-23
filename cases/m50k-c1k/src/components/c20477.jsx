import React from 'react';
const LABEL_20477 = 'component_20477';
export function Component20477({ value = 20477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20477, 'data-value': derived.doubled }, children);
}
export default Component20477;
