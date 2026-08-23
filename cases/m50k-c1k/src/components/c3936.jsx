import React from 'react';
const LABEL_3936 = 'component_3936';
export function Component3936({ value = 3936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3936, 'data-value': derived.doubled }, children);
}
export default Component3936;
