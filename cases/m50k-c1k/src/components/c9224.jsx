import React from 'react';
const LABEL_9224 = 'component_9224';
export function Component9224({ value = 9224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9224, 'data-value': derived.doubled }, children);
}
export default Component9224;
