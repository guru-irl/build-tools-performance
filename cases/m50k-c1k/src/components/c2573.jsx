import React from 'react';
const LABEL_2573 = 'component_2573';
export function Component2573({ value = 2573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2573, 'data-value': derived.doubled }, children);
}
export default Component2573;
