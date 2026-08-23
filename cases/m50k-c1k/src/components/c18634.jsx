import React from 'react';
const LABEL_18634 = 'component_18634';
export function Component18634({ value = 18634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18634, 'data-value': derived.doubled }, children);
}
export default Component18634;
