import React from 'react';
const LABEL_37590 = 'component_37590';
export function Component37590({ value = 37590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37590, 'data-value': derived.doubled }, children);
}
export default Component37590;
