import React from 'react';
const LABEL_36164 = 'component_36164';
export function Component36164({ value = 36164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36164, 'data-value': derived.doubled }, children);
}
export default Component36164;
