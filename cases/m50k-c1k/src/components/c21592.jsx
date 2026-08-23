import React from 'react';
const LABEL_21592 = 'component_21592';
export function Component21592({ value = 21592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21592, 'data-value': derived.doubled }, children);
}
export default Component21592;
