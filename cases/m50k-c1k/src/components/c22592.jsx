import React from 'react';
const LABEL_22592 = 'component_22592';
export function Component22592({ value = 22592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22592, 'data-value': derived.doubled }, children);
}
export default Component22592;
