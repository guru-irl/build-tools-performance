import React from 'react';
const LABEL_12634 = 'component_12634';
export function Component12634({ value = 12634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12634, 'data-value': derived.doubled }, children);
}
export default Component12634;
