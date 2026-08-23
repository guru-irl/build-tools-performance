import React from 'react';
const LABEL_25133 = 'component_25133';
export function Component25133({ value = 25133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25133, 'data-value': derived.doubled }, children);
}
export default Component25133;
