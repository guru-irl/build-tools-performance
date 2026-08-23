import React from 'react';
const LABEL_3630 = 'component_3630';
export function Component3630({ value = 3630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3630, 'data-value': derived.doubled }, children);
}
export default Component3630;
