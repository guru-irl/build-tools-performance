import React from 'react';
const LABEL_11413 = 'component_11413';
export function Component11413({ value = 11413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11413, 'data-value': derived.doubled }, children);
}
export default Component11413;
