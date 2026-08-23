import React from 'react';
const LABEL_592 = 'component_592';
export function Component592({ value = 592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_592, 'data-value': derived.doubled }, children);
}
export default Component592;
