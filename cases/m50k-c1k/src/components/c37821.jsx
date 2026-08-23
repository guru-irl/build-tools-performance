import React from 'react';
const LABEL_37821 = 'component_37821';
export function Component37821({ value = 37821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37821, 'data-value': derived.doubled }, children);
}
export default Component37821;
