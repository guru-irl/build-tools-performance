import React from 'react';
const LABEL_36575 = 'component_36575';
export function Component36575({ value = 36575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36575, 'data-value': derived.doubled }, children);
}
export default Component36575;
