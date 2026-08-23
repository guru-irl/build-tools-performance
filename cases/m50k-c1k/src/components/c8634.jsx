import React from 'react';
const LABEL_8634 = 'component_8634';
export function Component8634({ value = 8634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8634, 'data-value': derived.doubled }, children);
}
export default Component8634;
