import React from 'react';
const LABEL_2791 = 'component_2791';
export function Component2791({ value = 2791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2791, 'data-value': derived.doubled }, children);
}
export default Component2791;
