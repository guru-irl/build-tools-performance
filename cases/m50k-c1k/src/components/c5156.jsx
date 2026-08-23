import React from 'react';
const LABEL_5156 = 'component_5156';
export function Component5156({ value = 5156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5156, 'data-value': derived.doubled }, children);
}
export default Component5156;
