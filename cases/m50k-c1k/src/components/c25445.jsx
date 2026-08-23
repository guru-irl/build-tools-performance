import React from 'react';
const LABEL_25445 = 'component_25445';
export function Component25445({ value = 25445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25445, 'data-value': derived.doubled }, children);
}
export default Component25445;
