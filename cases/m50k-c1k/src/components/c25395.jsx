import React from 'react';
const LABEL_25395 = 'component_25395';
export function Component25395({ value = 25395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25395, 'data-value': derived.doubled }, children);
}
export default Component25395;
