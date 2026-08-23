import React from 'react';
const LABEL_31477 = 'component_31477';
export function Component31477({ value = 31477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31477, 'data-value': derived.doubled }, children);
}
export default Component31477;
