import React from 'react';
const LABEL_43634 = 'component_43634';
export function Component43634({ value = 43634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43634, 'data-value': derived.doubled }, children);
}
export default Component43634;
