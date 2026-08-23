import React from 'react';
const LABEL_15779 = 'component_15779';
export function Component15779({ value = 15779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15779, 'data-value': derived.doubled }, children);
}
export default Component15779;
