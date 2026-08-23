import React from 'react';
const LABEL_20174 = 'component_20174';
export function Component20174({ value = 20174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20174, 'data-value': derived.doubled }, children);
}
export default Component20174;
