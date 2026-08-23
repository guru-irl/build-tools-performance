import React from 'react';
const LABEL_15954 = 'component_15954';
export function Component15954({ value = 15954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15954, 'data-value': derived.doubled }, children);
}
export default Component15954;
