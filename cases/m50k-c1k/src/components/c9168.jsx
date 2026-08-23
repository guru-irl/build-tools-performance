import React from 'react';
const LABEL_9168 = 'component_9168';
export function Component9168({ value = 9168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9168, 'data-value': derived.doubled }, children);
}
export default Component9168;
