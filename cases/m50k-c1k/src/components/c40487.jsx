import React from 'react';
const LABEL_40487 = 'component_40487';
export function Component40487({ value = 40487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40487, 'data-value': derived.doubled }, children);
}
export default Component40487;
