import React from 'react';
const LABEL_13661 = 'component_13661';
export function Component13661({ value = 13661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13661, 'data-value': derived.doubled }, children);
}
export default Component13661;
