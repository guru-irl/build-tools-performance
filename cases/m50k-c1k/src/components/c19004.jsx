import React from 'react';
const LABEL_19004 = 'component_19004';
export function Component19004({ value = 19004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19004, 'data-value': derived.doubled }, children);
}
export default Component19004;
