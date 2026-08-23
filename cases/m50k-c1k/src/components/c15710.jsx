import React from 'react';
const LABEL_15710 = 'component_15710';
export function Component15710({ value = 15710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15710, 'data-value': derived.doubled }, children);
}
export default Component15710;
