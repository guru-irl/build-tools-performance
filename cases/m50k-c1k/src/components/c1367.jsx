import React from 'react';
const LABEL_1367 = 'component_1367';
export function Component1367({ value = 1367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1367, 'data-value': derived.doubled }, children);
}
export default Component1367;
