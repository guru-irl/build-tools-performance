import React from 'react';
const LABEL_6910 = 'component_6910';
export function Component6910({ value = 6910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6910, 'data-value': derived.doubled }, children);
}
export default Component6910;
