import React from 'react';
const LABEL_2487 = 'component_2487';
export function Component2487({ value = 2487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2487, 'data-value': derived.doubled }, children);
}
export default Component2487;
