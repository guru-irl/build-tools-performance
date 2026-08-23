import React from 'react';
const LABEL_21579 = 'component_21579';
export function Component21579({ value = 21579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21579, 'data-value': derived.doubled }, children);
}
export default Component21579;
