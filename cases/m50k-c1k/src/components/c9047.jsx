import React from 'react';
const LABEL_9047 = 'component_9047';
export function Component9047({ value = 9047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9047, 'data-value': derived.doubled }, children);
}
export default Component9047;
