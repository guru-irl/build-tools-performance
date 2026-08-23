import React from 'react';
const LABEL_26896 = 'component_26896';
export function Component26896({ value = 26896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26896, 'data-value': derived.doubled }, children);
}
export default Component26896;
