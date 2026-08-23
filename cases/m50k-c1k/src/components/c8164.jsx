import React from 'react';
const LABEL_8164 = 'component_8164';
export function Component8164({ value = 8164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8164, 'data-value': derived.doubled }, children);
}
export default Component8164;
