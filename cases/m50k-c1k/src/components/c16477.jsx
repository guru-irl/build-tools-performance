import React from 'react';
const LABEL_16477 = 'component_16477';
export function Component16477({ value = 16477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16477, 'data-value': derived.doubled }, children);
}
export default Component16477;
