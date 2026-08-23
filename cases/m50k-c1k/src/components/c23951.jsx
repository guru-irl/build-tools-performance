import React from 'react';
const LABEL_23951 = 'component_23951';
export function Component23951({ value = 23951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23951, 'data-value': derived.doubled }, children);
}
export default Component23951;
