import React from 'react';
const LABEL_42477 = 'component_42477';
export function Component42477({ value = 42477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42477, 'data-value': derived.doubled }, children);
}
export default Component42477;
