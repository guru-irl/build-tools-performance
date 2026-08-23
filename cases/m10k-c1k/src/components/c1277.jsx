import React from 'react';
const LABEL_1277 = 'component_1277';
export function Component1277({ value = 1277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1277, 'data-value': derived.doubled }, children);
}
export default Component1277;
