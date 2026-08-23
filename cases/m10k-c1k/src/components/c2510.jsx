import React from 'react';
const LABEL_2510 = 'component_2510';
export function Component2510({ value = 2510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2510, 'data-value': derived.doubled }, children);
}
export default Component2510;
