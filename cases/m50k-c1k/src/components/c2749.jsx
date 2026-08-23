import React from 'react';
const LABEL_2749 = 'component_2749';
export function Component2749({ value = 2749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2749, 'data-value': derived.doubled }, children);
}
export default Component2749;
