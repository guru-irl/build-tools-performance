import React from 'react';
const LABEL_25162 = 'component_25162';
export function Component25162({ value = 25162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25162, 'data-value': derived.doubled }, children);
}
export default Component25162;
