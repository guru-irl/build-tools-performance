import React from 'react';
const LABEL_7877 = 'component_7877';
export function Component7877({ value = 7877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7877, 'data-value': derived.doubled }, children);
}
export default Component7877;
