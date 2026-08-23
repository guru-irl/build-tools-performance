import React from 'react';
const LABEL_9570 = 'component_9570';
export function Component9570({ value = 9570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9570, 'data-value': derived.doubled }, children);
}
export default Component9570;
