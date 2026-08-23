import React from 'react';
const LABEL_11517 = 'component_11517';
export function Component11517({ value = 11517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11517, 'data-value': derived.doubled }, children);
}
export default Component11517;
