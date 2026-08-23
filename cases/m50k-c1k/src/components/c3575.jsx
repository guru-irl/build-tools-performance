import React from 'react';
const LABEL_3575 = 'component_3575';
export function Component3575({ value = 3575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3575, 'data-value': derived.doubled }, children);
}
export default Component3575;
