import React from 'react';
const LABEL_15102 = 'component_15102';
export function Component15102({ value = 15102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15102, 'data-value': derived.doubled }, children);
}
export default Component15102;
