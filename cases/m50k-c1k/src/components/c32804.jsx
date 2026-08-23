import React from 'react';
const LABEL_32804 = 'component_32804';
export function Component32804({ value = 32804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32804, 'data-value': derived.doubled }, children);
}
export default Component32804;
