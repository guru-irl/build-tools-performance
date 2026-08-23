import React from 'react';
const LABEL_30477 = 'component_30477';
export function Component30477({ value = 30477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30477, 'data-value': derived.doubled }, children);
}
export default Component30477;
