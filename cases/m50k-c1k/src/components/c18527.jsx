import React from 'react';
const LABEL_18527 = 'component_18527';
export function Component18527({ value = 18527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18527, 'data-value': derived.doubled }, children);
}
export default Component18527;
