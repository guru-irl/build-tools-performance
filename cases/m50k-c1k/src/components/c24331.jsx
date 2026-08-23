import React from 'react';
const LABEL_24331 = 'component_24331';
export function Component24331({ value = 24331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24331, 'data-value': derived.doubled }, children);
}
export default Component24331;
