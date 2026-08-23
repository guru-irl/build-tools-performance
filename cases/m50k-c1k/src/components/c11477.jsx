import React from 'react';
const LABEL_11477 = 'component_11477';
export function Component11477({ value = 11477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11477, 'data-value': derived.doubled }, children);
}
export default Component11477;
