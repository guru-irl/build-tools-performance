import React from 'react';
const LABEL_1404 = 'component_1404';
export function Component1404({ value = 1404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1404, 'data-value': derived.doubled }, children);
}
export default Component1404;
