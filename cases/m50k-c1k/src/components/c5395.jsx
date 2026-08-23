import React from 'react';
const LABEL_5395 = 'component_5395';
export function Component5395({ value = 5395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5395, 'data-value': derived.doubled }, children);
}
export default Component5395;
