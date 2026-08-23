import React from 'react';
const LABEL_1141 = 'component_1141';
export function Component1141({ value = 1141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1141, 'data-value': derived.doubled }, children);
}
export default Component1141;
