import React from 'react';
const LABEL_24156 = 'component_24156';
export function Component24156({ value = 24156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24156, 'data-value': derived.doubled }, children);
}
export default Component24156;
