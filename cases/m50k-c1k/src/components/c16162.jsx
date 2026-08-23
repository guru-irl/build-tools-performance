import React from 'react';
const LABEL_16162 = 'component_16162';
export function Component16162({ value = 16162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16162, 'data-value': derived.doubled }, children);
}
export default Component16162;
