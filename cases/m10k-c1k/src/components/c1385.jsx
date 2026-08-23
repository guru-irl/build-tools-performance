import React from 'react';
const LABEL_1385 = 'component_1385';
export function Component1385({ value = 1385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1385, 'data-value': derived.doubled }, children);
}
export default Component1385;
