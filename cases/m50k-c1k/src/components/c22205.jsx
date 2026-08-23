import React from 'react';
const LABEL_22205 = 'component_22205';
export function Component22205({ value = 22205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22205, 'data-value': derived.doubled }, children);
}
export default Component22205;
