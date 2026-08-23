import React from 'react';
const LABEL_21832 = 'component_21832';
export function Component21832({ value = 21832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21832, 'data-value': derived.doubled }, children);
}
export default Component21832;
