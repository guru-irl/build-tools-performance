import React from 'react';
const LABEL_29575 = 'component_29575';
export function Component29575({ value = 29575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29575, 'data-value': derived.doubled }, children);
}
export default Component29575;
