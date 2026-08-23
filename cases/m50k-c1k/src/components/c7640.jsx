import React from 'react';
const LABEL_7640 = 'component_7640';
export function Component7640({ value = 7640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7640, 'data-value': derived.doubled }, children);
}
export default Component7640;
