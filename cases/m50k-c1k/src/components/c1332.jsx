import React from 'react';
const LABEL_1332 = 'component_1332';
export function Component1332({ value = 1332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1332, 'data-value': derived.doubled }, children);
}
export default Component1332;
