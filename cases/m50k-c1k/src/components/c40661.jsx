import React from 'react';
const LABEL_40661 = 'component_40661';
export function Component40661({ value = 40661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40661, 'data-value': derived.doubled }, children);
}
export default Component40661;
