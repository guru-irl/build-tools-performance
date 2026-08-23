import React from 'react';
const LABEL_21075 = 'component_21075';
export function Component21075({ value = 21075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21075, 'data-value': derived.doubled }, children);
}
export default Component21075;
