import React from 'react';
const LABEL_3487 = 'component_3487';
export function Component3487({ value = 3487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3487, 'data-value': derived.doubled }, children);
}
export default Component3487;
