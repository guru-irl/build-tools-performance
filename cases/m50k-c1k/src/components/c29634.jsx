import React from 'react';
const LABEL_29634 = 'component_29634';
export function Component29634({ value = 29634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29634, 'data-value': derived.doubled }, children);
}
export default Component29634;
