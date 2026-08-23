import React from 'react';
const LABEL_11609 = 'component_11609';
export function Component11609({ value = 11609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11609, 'data-value': derived.doubled }, children);
}
export default Component11609;
