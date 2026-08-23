import React from 'react';
const LABEL_25910 = 'component_25910';
export function Component25910({ value = 25910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25910, 'data-value': derived.doubled }, children);
}
export default Component25910;
