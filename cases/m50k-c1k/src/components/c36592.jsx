import React from 'react';
const LABEL_36592 = 'component_36592';
export function Component36592({ value = 36592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36592, 'data-value': derived.doubled }, children);
}
export default Component36592;
