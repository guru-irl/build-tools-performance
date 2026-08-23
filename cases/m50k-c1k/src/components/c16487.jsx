import React from 'react';
const LABEL_16487 = 'component_16487';
export function Component16487({ value = 16487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16487, 'data-value': derived.doubled }, children);
}
export default Component16487;
