import React from 'react';
const LABEL_38634 = 'component_38634';
export function Component38634({ value = 38634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38634, 'data-value': derived.doubled }, children);
}
export default Component38634;
