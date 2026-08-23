import React from 'react';
const LABEL_46592 = 'component_46592';
export function Component46592({ value = 46592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46592, 'data-value': derived.doubled }, children);
}
export default Component46592;
