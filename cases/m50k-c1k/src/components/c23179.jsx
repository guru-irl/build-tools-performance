import React from 'react';
const LABEL_23179 = 'component_23179';
export function Component23179({ value = 23179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23179, 'data-value': derived.doubled }, children);
}
export default Component23179;
