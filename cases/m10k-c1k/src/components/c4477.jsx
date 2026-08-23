import React from 'react';
const LABEL_4477 = 'component_4477';
export function Component4477({ value = 4477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4477, 'data-value': derived.doubled }, children);
}
export default Component4477;
