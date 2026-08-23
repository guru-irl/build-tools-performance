import React from 'react';
const LABEL_12324 = 'component_12324';
export function Component12324({ value = 12324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12324, 'data-value': derived.doubled }, children);
}
export default Component12324;
