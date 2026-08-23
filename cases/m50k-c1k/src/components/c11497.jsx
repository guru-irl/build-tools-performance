import React from 'react';
const LABEL_11497 = 'component_11497';
export function Component11497({ value = 11497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11497, 'data-value': derived.doubled }, children);
}
export default Component11497;
