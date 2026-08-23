import React from 'react';
const LABEL_28634 = 'component_28634';
export function Component28634({ value = 28634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28634, 'data-value': derived.doubled }, children);
}
export default Component28634;
