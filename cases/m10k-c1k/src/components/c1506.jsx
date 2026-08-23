import React from 'react';
const LABEL_1506 = 'component_1506';
export function Component1506({ value = 1506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1506, 'data-value': derived.doubled }, children);
}
export default Component1506;
