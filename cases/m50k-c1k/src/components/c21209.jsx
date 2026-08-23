import React from 'react';
const LABEL_21209 = 'component_21209';
export function Component21209({ value = 21209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21209, 'data-value': derived.doubled }, children);
}
export default Component21209;
