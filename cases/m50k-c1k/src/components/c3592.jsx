import React from 'react';
const LABEL_3592 = 'component_3592';
export function Component3592({ value = 3592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3592, 'data-value': derived.doubled }, children);
}
export default Component3592;
