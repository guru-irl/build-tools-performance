import React from 'react';
const LABEL_1477 = 'component_1477';
export function Component1477({ value = 1477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1477, 'data-value': derived.doubled }, children);
}
export default Component1477;
