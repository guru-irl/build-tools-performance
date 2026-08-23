import React from 'react';
const LABEL_14202 = 'component_14202';
export function Component14202({ value = 14202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14202, 'data-value': derived.doubled }, children);
}
export default Component14202;
