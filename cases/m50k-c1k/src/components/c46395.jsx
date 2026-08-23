import React from 'react';
const LABEL_46395 = 'component_46395';
export function Component46395({ value = 46395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46395, 'data-value': derived.doubled }, children);
}
export default Component46395;
