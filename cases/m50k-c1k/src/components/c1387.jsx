import React from 'react';
const LABEL_1387 = 'component_1387';
export function Component1387({ value = 1387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1387, 'data-value': derived.doubled }, children);
}
export default Component1387;
