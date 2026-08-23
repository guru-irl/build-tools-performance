import React from 'react';
const LABEL_29477 = 'component_29477';
export function Component29477({ value = 29477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29477, 'data-value': derived.doubled }, children);
}
export default Component29477;
