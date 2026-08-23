import React from 'react';
const LABEL_22283 = 'component_22283';
export function Component22283({ value = 22283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22283, 'data-value': derived.doubled }, children);
}
export default Component22283;
