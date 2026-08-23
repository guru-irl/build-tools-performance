import React from 'react';
const LABEL_9419 = 'component_9419';
export function Component9419({ value = 9419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9419, 'data-value': derived.doubled }, children);
}
export default Component9419;
