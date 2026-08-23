import React from 'react';
const LABEL_1217 = 'component_1217';
export function Component1217({ value = 1217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1217, 'data-value': derived.doubled }, children);
}
export default Component1217;
