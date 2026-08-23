import React from 'react';
const LABEL_21395 = 'component_21395';
export function Component21395({ value = 21395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21395, 'data-value': derived.doubled }, children);
}
export default Component21395;
