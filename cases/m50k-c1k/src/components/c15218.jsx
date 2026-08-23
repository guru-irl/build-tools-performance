import React from 'react';
const LABEL_15218 = 'component_15218';
export function Component15218({ value = 15218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15218, 'data-value': derived.doubled }, children);
}
export default Component15218;
