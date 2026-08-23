import React from 'react';
const LABEL_10592 = 'component_10592';
export function Component10592({ value = 10592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10592, 'data-value': derived.doubled }, children);
}
export default Component10592;
