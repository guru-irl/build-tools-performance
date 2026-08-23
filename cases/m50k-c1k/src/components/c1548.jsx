import React from 'react';
const LABEL_1548 = 'component_1548';
export function Component1548({ value = 1548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1548, 'data-value': derived.doubled }, children);
}
export default Component1548;
