import React from 'react';
const LABEL_15601 = 'component_15601';
export function Component15601({ value = 15601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15601, 'data-value': derived.doubled }, children);
}
export default Component15601;
