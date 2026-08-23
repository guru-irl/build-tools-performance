import React from 'react';
const LABEL_33338 = 'component_33338';
export function Component33338({ value = 33338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33338, 'data-value': derived.doubled }, children);
}
export default Component33338;
