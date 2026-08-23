import React from 'react';
const LABEL_15589 = 'component_15589';
export function Component15589({ value = 15589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15589, 'data-value': derived.doubled }, children);
}
export default Component15589;
