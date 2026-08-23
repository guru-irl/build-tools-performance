import React from 'react';
const LABEL_20413 = 'component_20413';
export function Component20413({ value = 20413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20413, 'data-value': derived.doubled }, children);
}
export default Component20413;
