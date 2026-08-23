import React from 'react';
const LABEL_12108 = 'component_12108';
export function Component12108({ value = 12108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12108, 'data-value': derived.doubled }, children);
}
export default Component12108;
