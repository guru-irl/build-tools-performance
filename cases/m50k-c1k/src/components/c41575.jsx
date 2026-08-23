import React from 'react';
const LABEL_41575 = 'component_41575';
export function Component41575({ value = 41575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41575, 'data-value': derived.doubled }, children);
}
export default Component41575;
