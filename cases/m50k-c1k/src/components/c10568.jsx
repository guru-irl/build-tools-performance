import React from 'react';
const LABEL_10568 = 'component_10568';
export function Component10568({ value = 10568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10568, 'data-value': derived.doubled }, children);
}
export default Component10568;
