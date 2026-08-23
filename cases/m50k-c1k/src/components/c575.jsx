import React from 'react';
const LABEL_575 = 'component_575';
export function Component575({ value = 575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_575, 'data-value': derived.doubled }, children);
}
export default Component575;
