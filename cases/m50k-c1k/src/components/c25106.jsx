import React from 'react';
const LABEL_25106 = 'component_25106';
export function Component25106({ value = 25106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25106, 'data-value': derived.doubled }, children);
}
export default Component25106;
