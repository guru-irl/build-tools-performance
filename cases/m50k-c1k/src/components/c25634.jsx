import React from 'react';
const LABEL_25634 = 'component_25634';
export function Component25634({ value = 25634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25634, 'data-value': derived.doubled }, children);
}
export default Component25634;
