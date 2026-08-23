import React from 'react';
const LABEL_25545 = 'component_25545';
export function Component25545({ value = 25545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25545, 'data-value': derived.doubled }, children);
}
export default Component25545;
