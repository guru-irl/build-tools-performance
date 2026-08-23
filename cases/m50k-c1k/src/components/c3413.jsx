import React from 'react';
const LABEL_3413 = 'component_3413';
export function Component3413({ value = 3413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3413, 'data-value': derived.doubled }, children);
}
export default Component3413;
