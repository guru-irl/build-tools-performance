import React from 'react';
const LABEL_22591 = 'component_22591';
export function Component22591({ value = 22591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22591, 'data-value': derived.doubled }, children);
}
export default Component22591;
