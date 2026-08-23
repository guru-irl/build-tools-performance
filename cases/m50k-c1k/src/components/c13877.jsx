import React from 'react';
const LABEL_13877 = 'component_13877';
export function Component13877({ value = 13877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13877, 'data-value': derived.doubled }, children);
}
export default Component13877;
