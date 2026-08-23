import React from 'react';
const LABEL_7079 = 'component_7079';
export function Component7079({ value = 7079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7079, 'data-value': derived.doubled }, children);
}
export default Component7079;
