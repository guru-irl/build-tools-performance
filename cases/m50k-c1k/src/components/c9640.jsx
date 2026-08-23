import React from 'react';
const LABEL_9640 = 'component_9640';
export function Component9640({ value = 9640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9640, 'data-value': derived.doubled }, children);
}
export default Component9640;
