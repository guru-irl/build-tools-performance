import React from 'react';
const LABEL_11655 = 'component_11655';
export function Component11655({ value = 11655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11655, 'data-value': derived.doubled }, children);
}
export default Component11655;
