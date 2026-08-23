import React from 'react';
const LABEL_3661 = 'component_3661';
export function Component3661({ value = 3661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3661, 'data-value': derived.doubled }, children);
}
export default Component3661;
