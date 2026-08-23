import React from 'react';
const LABEL_22575 = 'component_22575';
export function Component22575({ value = 22575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22575, 'data-value': derived.doubled }, children);
}
export default Component22575;
