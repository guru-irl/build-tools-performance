import React from 'react';
const LABEL_3824 = 'component_3824';
export function Component3824({ value = 3824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3824, 'data-value': derived.doubled }, children);
}
export default Component3824;
