import React from 'react';
const LABEL_1884 = 'component_1884';
export function Component1884({ value = 1884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1884, 'data-value': derived.doubled }, children);
}
export default Component1884;
