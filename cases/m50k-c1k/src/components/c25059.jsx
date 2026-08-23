import React from 'react';
const LABEL_25059 = 'component_25059';
export function Component25059({ value = 25059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25059, 'data-value': derived.doubled }, children);
}
export default Component25059;
