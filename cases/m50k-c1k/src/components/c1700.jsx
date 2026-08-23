import React from 'react';
const LABEL_1700 = 'component_1700';
export function Component1700({ value = 1700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1700, 'data-value': derived.doubled }, children);
}
export default Component1700;
