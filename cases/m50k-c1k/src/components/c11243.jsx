import React from 'react';
const LABEL_11243 = 'component_11243';
export function Component11243({ value = 11243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11243, 'data-value': derived.doubled }, children);
}
export default Component11243;
