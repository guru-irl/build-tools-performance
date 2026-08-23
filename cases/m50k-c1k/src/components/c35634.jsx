import React from 'react';
const LABEL_35634 = 'component_35634';
export function Component35634({ value = 35634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35634, 'data-value': derived.doubled }, children);
}
export default Component35634;
