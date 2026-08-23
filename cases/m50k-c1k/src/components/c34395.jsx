import React from 'react';
const LABEL_34395 = 'component_34395';
export function Component34395({ value = 34395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34395, 'data-value': derived.doubled }, children);
}
export default Component34395;
