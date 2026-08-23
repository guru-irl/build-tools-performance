import React from 'react';
const LABEL_7592 = 'component_7592';
export function Component7592({ value = 7592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7592, 'data-value': derived.doubled }, children);
}
export default Component7592;
