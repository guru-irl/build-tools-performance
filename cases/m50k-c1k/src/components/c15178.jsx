import React from 'react';
const LABEL_15178 = 'component_15178';
export function Component15178({ value = 15178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15178, 'data-value': derived.doubled }, children);
}
export default Component15178;
