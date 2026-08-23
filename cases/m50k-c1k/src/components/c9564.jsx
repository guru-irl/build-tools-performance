import React from 'react';
const LABEL_9564 = 'component_9564';
export function Component9564({ value = 9564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9564, 'data-value': derived.doubled }, children);
}
export default Component9564;
