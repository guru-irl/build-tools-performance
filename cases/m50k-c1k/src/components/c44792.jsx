import React from 'react';
const LABEL_44792 = 'component_44792';
export function Component44792({ value = 44792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44792, 'data-value': derived.doubled }, children);
}
export default Component44792;
