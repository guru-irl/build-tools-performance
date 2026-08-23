import React from 'react';
const LABEL_23164 = 'component_23164';
export function Component23164({ value = 23164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23164, 'data-value': derived.doubled }, children);
}
export default Component23164;
