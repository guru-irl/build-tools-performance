import React from 'react';
const LABEL_9230 = 'component_9230';
export function Component9230({ value = 9230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9230, 'data-value': derived.doubled }, children);
}
export default Component9230;
