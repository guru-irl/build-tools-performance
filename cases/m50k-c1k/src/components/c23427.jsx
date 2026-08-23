import React from 'react';
const LABEL_23427 = 'component_23427';
export function Component23427({ value = 23427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23427, 'data-value': derived.doubled }, children);
}
export default Component23427;
