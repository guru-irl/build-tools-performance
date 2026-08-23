import React from 'react';
const LABEL_15585 = 'component_15585';
export function Component15585({ value = 15585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15585, 'data-value': derived.doubled }, children);
}
export default Component15585;
