import React from 'react';
const LABEL_1420 = 'component_1420';
export function Component1420({ value = 1420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1420, 'data-value': derived.doubled }, children);
}
export default Component1420;
