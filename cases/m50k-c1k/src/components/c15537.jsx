import React from 'react';
const LABEL_15537 = 'component_15537';
export function Component15537({ value = 15537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15537, 'data-value': derived.doubled }, children);
}
export default Component15537;
