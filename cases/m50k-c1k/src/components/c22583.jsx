import React from 'react';
const LABEL_22583 = 'component_22583';
export function Component22583({ value = 22583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22583, 'data-value': derived.doubled }, children);
}
export default Component22583;
