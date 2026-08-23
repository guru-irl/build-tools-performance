import React from 'react';
const LABEL_40562 = 'component_40562';
export function Component40562({ value = 40562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40562, 'data-value': derived.doubled }, children);
}
export default Component40562;
