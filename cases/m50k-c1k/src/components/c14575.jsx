import React from 'react';
const LABEL_14575 = 'component_14575';
export function Component14575({ value = 14575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14575, 'data-value': derived.doubled }, children);
}
export default Component14575;
