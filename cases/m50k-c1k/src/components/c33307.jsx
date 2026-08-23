import React from 'react';
const LABEL_33307 = 'component_33307';
export function Component33307({ value = 33307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33307, 'data-value': derived.doubled }, children);
}
export default Component33307;
