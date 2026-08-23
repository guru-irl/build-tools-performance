import React from 'react';
const LABEL_6877 = 'component_6877';
export function Component6877({ value = 6877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6877, 'data-value': derived.doubled }, children);
}
export default Component6877;
