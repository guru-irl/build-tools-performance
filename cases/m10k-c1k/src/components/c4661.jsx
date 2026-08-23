import React from 'react';
const LABEL_4661 = 'component_4661';
export function Component4661({ value = 4661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4661, 'data-value': derived.doubled }, children);
}
export default Component4661;
