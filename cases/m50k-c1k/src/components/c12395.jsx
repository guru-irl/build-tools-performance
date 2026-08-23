import React from 'react';
const LABEL_12395 = 'component_12395';
export function Component12395({ value = 12395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12395, 'data-value': derived.doubled }, children);
}
export default Component12395;
