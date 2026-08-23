import React from 'react';
const LABEL_8168 = 'component_8168';
export function Component8168({ value = 8168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8168, 'data-value': derived.doubled }, children);
}
export default Component8168;
