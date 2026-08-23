import React from 'react';
const LABEL_7076 = 'component_7076';
export function Component7076({ value = 7076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7076, 'data-value': derived.doubled }, children);
}
export default Component7076;
