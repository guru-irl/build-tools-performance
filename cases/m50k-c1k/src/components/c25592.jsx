import React from 'react';
const LABEL_25592 = 'component_25592';
export function Component25592({ value = 25592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25592, 'data-value': derived.doubled }, children);
}
export default Component25592;
