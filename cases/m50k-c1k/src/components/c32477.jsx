import React from 'react';
const LABEL_32477 = 'component_32477';
export function Component32477({ value = 32477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32477, 'data-value': derived.doubled }, children);
}
export default Component32477;
