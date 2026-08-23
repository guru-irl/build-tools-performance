import React from 'react';
const LABEL_32579 = 'component_32579';
export function Component32579({ value = 32579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32579, 'data-value': derived.doubled }, children);
}
export default Component32579;
