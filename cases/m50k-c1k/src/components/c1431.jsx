import React from 'react';
const LABEL_1431 = 'component_1431';
export function Component1431({ value = 1431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1431, 'data-value': derived.doubled }, children);
}
export default Component1431;
