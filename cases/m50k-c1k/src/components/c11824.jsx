import React from 'react';
const LABEL_11824 = 'component_11824';
export function Component11824({ value = 11824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11824, 'data-value': derived.doubled }, children);
}
export default Component11824;
