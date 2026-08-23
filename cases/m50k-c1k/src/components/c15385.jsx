import React from 'react';
const LABEL_15385 = 'component_15385';
export function Component15385({ value = 15385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15385, 'data-value': derived.doubled }, children);
}
export default Component15385;
