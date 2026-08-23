import React from 'react';
const LABEL_7375 = 'component_7375';
export function Component7375({ value = 7375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7375, 'data-value': derived.doubled }, children);
}
export default Component7375;
