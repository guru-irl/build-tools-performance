import React from 'react';
const LABEL_33331 = 'component_33331';
export function Component33331({ value = 33331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33331, 'data-value': derived.doubled }, children);
}
export default Component33331;
