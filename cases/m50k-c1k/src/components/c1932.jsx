import React from 'react';
const LABEL_1932 = 'component_1932';
export function Component1932({ value = 1932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1932, 'data-value': derived.doubled }, children);
}
export default Component1932;
