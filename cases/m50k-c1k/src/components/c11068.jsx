import React from 'react';
const LABEL_11068 = 'component_11068';
export function Component11068({ value = 11068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11068, 'data-value': derived.doubled }, children);
}
export default Component11068;
