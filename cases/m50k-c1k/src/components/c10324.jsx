import React from 'react';
const LABEL_10324 = 'component_10324';
export function Component10324({ value = 10324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10324, 'data-value': derived.doubled }, children);
}
export default Component10324;
