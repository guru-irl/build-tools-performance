import React from 'react';
const LABEL_15425 = 'component_15425';
export function Component15425({ value = 15425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15425, 'data-value': derived.doubled }, children);
}
export default Component15425;
