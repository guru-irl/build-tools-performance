import React from 'react';
const LABEL_2499 = 'component_2499';
export function Component2499({ value = 2499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2499, 'data-value': derived.doubled }, children);
}
export default Component2499;
