import React from 'react';
const LABEL_16634 = 'component_16634';
export function Component16634({ value = 16634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16634, 'data-value': derived.doubled }, children);
}
export default Component16634;
