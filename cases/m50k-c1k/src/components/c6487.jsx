import React from 'react';
const LABEL_6487 = 'component_6487';
export function Component6487({ value = 6487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6487, 'data-value': derived.doubled }, children);
}
export default Component6487;
