import React from 'react';
const LABEL_19134 = 'component_19134';
export function Component19134({ value = 19134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19134, 'data-value': derived.doubled }, children);
}
export default Component19134;
