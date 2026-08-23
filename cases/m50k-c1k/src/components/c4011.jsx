import React from 'react';
const LABEL_4011 = 'component_4011';
export function Component4011({ value = 4011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4011, 'data-value': derived.doubled }, children);
}
export default Component4011;
