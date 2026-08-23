import React from 'react';
const LABEL_25644 = 'component_25644';
export function Component25644({ value = 25644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25644, 'data-value': derived.doubled }, children);
}
export default Component25644;
