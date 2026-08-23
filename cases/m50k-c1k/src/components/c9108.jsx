import React from 'react';
const LABEL_9108 = 'component_9108';
export function Component9108({ value = 9108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9108, 'data-value': derived.doubled }, children);
}
export default Component9108;
