import React from 'react';
const LABEL_16592 = 'component_16592';
export function Component16592({ value = 16592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16592, 'data-value': derived.doubled }, children);
}
export default Component16592;
