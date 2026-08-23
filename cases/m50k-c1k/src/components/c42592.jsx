import React from 'react';
const LABEL_42592 = 'component_42592';
export function Component42592({ value = 42592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42592, 'data-value': derived.doubled }, children);
}
export default Component42592;
