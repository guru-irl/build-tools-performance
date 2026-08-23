import React from 'react';
const LABEL_1039 = 'component_1039';
export function Component1039({ value = 1039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1039, 'data-value': derived.doubled }, children);
}
export default Component1039;
