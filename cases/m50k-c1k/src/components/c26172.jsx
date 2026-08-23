import React from 'react';
const LABEL_26172 = 'component_26172';
export function Component26172({ value = 26172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26172, 'data-value': derived.doubled }, children);
}
export default Component26172;
