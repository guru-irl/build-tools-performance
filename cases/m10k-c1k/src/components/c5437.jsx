import React from 'react';
const LABEL_5437 = 'component_5437';
export function Component5437({ value = 5437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5437, 'data-value': derived.doubled }, children);
}
export default Component5437;
