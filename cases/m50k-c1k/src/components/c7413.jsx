import React from 'react';
const LABEL_7413 = 'component_7413';
export function Component7413({ value = 7413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7413, 'data-value': derived.doubled }, children);
}
export default Component7413;
