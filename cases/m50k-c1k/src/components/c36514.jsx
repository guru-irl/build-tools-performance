import React from 'react';
const LABEL_36514 = 'component_36514';
export function Component36514({ value = 36514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36514, 'data-value': derived.doubled }, children);
}
export default Component36514;
