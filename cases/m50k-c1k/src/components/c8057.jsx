import React from 'react';
const LABEL_8057 = 'component_8057';
export function Component8057({ value = 8057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8057, 'data-value': derived.doubled }, children);
}
export default Component8057;
