import React from 'react';
const LABEL_9395 = 'component_9395';
export function Component9395({ value = 9395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9395, 'data-value': derived.doubled }, children);
}
export default Component9395;
