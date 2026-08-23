import React from 'react';
const LABEL_11469 = 'component_11469';
export function Component11469({ value = 11469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11469, 'data-value': derived.doubled }, children);
}
export default Component11469;
