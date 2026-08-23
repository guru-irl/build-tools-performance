import React from 'react';
const LABEL_9186 = 'component_9186';
export function Component9186({ value = 9186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9186, 'data-value': derived.doubled }, children);
}
export default Component9186;
