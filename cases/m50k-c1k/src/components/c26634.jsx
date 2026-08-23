import React from 'react';
const LABEL_26634 = 'component_26634';
export function Component26634({ value = 26634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26634, 'data-value': derived.doubled }, children);
}
export default Component26634;
