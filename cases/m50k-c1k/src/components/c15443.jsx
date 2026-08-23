import React from 'react';
const LABEL_15443 = 'component_15443';
export function Component15443({ value = 15443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15443, 'data-value': derived.doubled }, children);
}
export default Component15443;
