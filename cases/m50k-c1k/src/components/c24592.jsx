import React from 'react';
const LABEL_24592 = 'component_24592';
export function Component24592({ value = 24592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24592, 'data-value': derived.doubled }, children);
}
export default Component24592;
