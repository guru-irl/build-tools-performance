import React from 'react';
const LABEL_7478 = 'component_7478';
export function Component7478({ value = 7478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7478, 'data-value': derived.doubled }, children);
}
export default Component7478;
