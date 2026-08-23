import React from 'react';
const LABEL_44634 = 'component_44634';
export function Component44634({ value = 44634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44634, 'data-value': derived.doubled }, children);
}
export default Component44634;
