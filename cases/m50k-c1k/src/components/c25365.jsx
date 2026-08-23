import React from 'react';
const LABEL_25365 = 'component_25365';
export function Component25365({ value = 25365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25365, 'data-value': derived.doubled }, children);
}
export default Component25365;
