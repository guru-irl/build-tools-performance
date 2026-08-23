import React from 'react';
const LABEL_15877 = 'component_15877';
export function Component15877({ value = 15877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15877, 'data-value': derived.doubled }, children);
}
export default Component15877;
