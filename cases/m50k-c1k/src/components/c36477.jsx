import React from 'react';
const LABEL_36477 = 'component_36477';
export function Component36477({ value = 36477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36477, 'data-value': derived.doubled }, children);
}
export default Component36477;
