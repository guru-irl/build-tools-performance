import React from 'react';
const LABEL_21588 = 'component_21588';
export function Component21588({ value = 21588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21588, 'data-value': derived.doubled }, children);
}
export default Component21588;
