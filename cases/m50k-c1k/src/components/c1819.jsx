import React from 'react';
const LABEL_1819 = 'component_1819';
export function Component1819({ value = 1819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1819, 'data-value': derived.doubled }, children);
}
export default Component1819;
