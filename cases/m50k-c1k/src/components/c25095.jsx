import React from 'react';
const LABEL_25095 = 'component_25095';
export function Component25095({ value = 25095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25095, 'data-value': derived.doubled }, children);
}
export default Component25095;
