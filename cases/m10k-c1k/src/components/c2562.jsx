import React from 'react';
const LABEL_2562 = 'component_2562';
export function Component2562({ value = 2562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2562, 'data-value': derived.doubled }, children);
}
export default Component2562;
