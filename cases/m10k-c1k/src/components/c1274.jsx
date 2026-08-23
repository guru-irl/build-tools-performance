import React from 'react';
const LABEL_1274 = 'component_1274';
export function Component1274({ value = 1274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1274, 'data-value': derived.doubled }, children);
}
export default Component1274;
