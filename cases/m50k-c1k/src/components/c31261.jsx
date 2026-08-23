import React from 'react';
const LABEL_31261 = 'component_31261';
export function Component31261({ value = 31261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31261, 'data-value': derived.doubled }, children);
}
export default Component31261;
