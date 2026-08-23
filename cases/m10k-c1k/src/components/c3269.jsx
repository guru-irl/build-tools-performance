import React from 'react';
const LABEL_3269 = 'component_3269';
export function Component3269({ value = 3269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3269, 'data-value': derived.doubled }, children);
}
export default Component3269;
