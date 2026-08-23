import React from 'react';
const LABEL_21798 = 'component_21798';
export function Component21798({ value = 21798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21798, 'data-value': derived.doubled }, children);
}
export default Component21798;
