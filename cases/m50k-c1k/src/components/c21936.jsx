import React from 'react';
const LABEL_21936 = 'component_21936';
export function Component21936({ value = 21936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21936, 'data-value': derived.doubled }, children);
}
export default Component21936;
