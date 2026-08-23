import React from 'react';
const LABEL_9410 = 'component_9410';
export function Component9410({ value = 9410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9410, 'data-value': derived.doubled }, children);
}
export default Component9410;
