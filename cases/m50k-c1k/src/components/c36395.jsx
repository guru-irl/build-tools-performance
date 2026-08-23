import React from 'react';
const LABEL_36395 = 'component_36395';
export function Component36395({ value = 36395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36395, 'data-value': derived.doubled }, children);
}
export default Component36395;
