import React from 'react';
const LABEL_1174 = 'component_1174';
export function Component1174({ value = 1174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1174, 'data-value': derived.doubled }, children);
}
export default Component1174;
