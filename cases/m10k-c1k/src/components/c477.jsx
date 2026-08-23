import React from 'react';
const LABEL_477 = 'component_477';
export function Component477({ value = 477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_477, 'data-value': derived.doubled }, children);
}
export default Component477;
