import React from 'react';
const LABEL_7350 = 'component_7350';
export function Component7350({ value = 7350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7350, 'data-value': derived.doubled }, children);
}
export default Component7350;
