import React from 'react';
const LABEL_1411 = 'component_1411';
export function Component1411({ value = 1411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1411, 'data-value': derived.doubled }, children);
}
export default Component1411;
