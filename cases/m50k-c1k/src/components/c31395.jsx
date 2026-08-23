import React from 'react';
const LABEL_31395 = 'component_31395';
export function Component31395({ value = 31395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31395, 'data-value': derived.doubled }, children);
}
export default Component31395;
