import React from 'react';
const LABEL_33206 = 'component_33206';
export function Component33206({ value = 33206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33206, 'data-value': derived.doubled }, children);
}
export default Component33206;
