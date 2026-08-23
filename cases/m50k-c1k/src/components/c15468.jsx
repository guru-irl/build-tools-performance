import React from 'react';
const LABEL_15468 = 'component_15468';
export function Component15468({ value = 15468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15468, 'data-value': derived.doubled }, children);
}
export default Component15468;
