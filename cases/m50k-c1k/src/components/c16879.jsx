import React from 'react';
const LABEL_16879 = 'component_16879';
export function Component16879({ value = 16879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16879, 'data-value': derived.doubled }, children);
}
export default Component16879;
