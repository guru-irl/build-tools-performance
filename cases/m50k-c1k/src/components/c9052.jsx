import React from 'react';
const LABEL_9052 = 'component_9052';
export function Component9052({ value = 9052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9052, 'data-value': derived.doubled }, children);
}
export default Component9052;
