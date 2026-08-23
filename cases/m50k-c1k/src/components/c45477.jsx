import React from 'react';
const LABEL_45477 = 'component_45477';
export function Component45477({ value = 45477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45477, 'data-value': derived.doubled }, children);
}
export default Component45477;
