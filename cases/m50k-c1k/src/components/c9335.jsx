import React from 'react';
const LABEL_9335 = 'component_9335';
export function Component9335({ value = 9335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9335, 'data-value': derived.doubled }, children);
}
export default Component9335;
