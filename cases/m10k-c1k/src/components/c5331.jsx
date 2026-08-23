import React from 'react';
const LABEL_5331 = 'component_5331';
export function Component5331({ value = 5331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5331, 'data-value': derived.doubled }, children);
}
export default Component5331;
