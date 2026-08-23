import React from 'react';
const LABEL_3791 = 'component_3791';
export function Component3791({ value = 3791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3791, 'data-value': derived.doubled }, children);
}
export default Component3791;
