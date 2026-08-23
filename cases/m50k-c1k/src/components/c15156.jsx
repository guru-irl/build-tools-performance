import React from 'react';
const LABEL_15156 = 'component_15156';
export function Component15156({ value = 15156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15156, 'data-value': derived.doubled }, children);
}
export default Component15156;
