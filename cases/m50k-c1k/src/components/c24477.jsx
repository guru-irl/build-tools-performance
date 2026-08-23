import React from 'react';
const LABEL_24477 = 'component_24477';
export function Component24477({ value = 24477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24477, 'data-value': derived.doubled }, children);
}
export default Component24477;
