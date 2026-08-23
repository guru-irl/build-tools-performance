import React from 'react';
const LABEL_36792 = 'component_36792';
export function Component36792({ value = 36792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36792, 'data-value': derived.doubled }, children);
}
export default Component36792;
