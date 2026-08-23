import React from 'react';
const LABEL_25423 = 'component_25423';
export function Component25423({ value = 25423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25423, 'data-value': derived.doubled }, children);
}
export default Component25423;
