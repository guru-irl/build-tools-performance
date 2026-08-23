import React from 'react';
const LABEL_15622 = 'component_15622';
export function Component15622({ value = 15622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15622, 'data-value': derived.doubled }, children);
}
export default Component15622;
