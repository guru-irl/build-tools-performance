import React from 'react';
const LABEL_21877 = 'component_21877';
export function Component21877({ value = 21877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21877, 'data-value': derived.doubled }, children);
}
export default Component21877;
