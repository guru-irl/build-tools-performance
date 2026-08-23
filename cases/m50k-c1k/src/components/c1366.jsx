import React from 'react';
const LABEL_1366 = 'component_1366';
export function Component1366({ value = 1366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1366, 'data-value': derived.doubled }, children);
}
export default Component1366;
