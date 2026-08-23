import React from 'react';
const LABEL_9592 = 'component_9592';
export function Component9592({ value = 9592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9592, 'data-value': derived.doubled }, children);
}
export default Component9592;
