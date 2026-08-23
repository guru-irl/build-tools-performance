import React from 'react';
const LABEL_41477 = 'component_41477';
export function Component41477({ value = 41477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41477, 'data-value': derived.doubled }, children);
}
export default Component41477;
