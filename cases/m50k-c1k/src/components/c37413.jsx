import React from 'react';
const LABEL_37413 = 'component_37413';
export function Component37413({ value = 37413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37413, 'data-value': derived.doubled }, children);
}
export default Component37413;
