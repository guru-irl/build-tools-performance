import React from 'react';
const LABEL_2039 = 'component_2039';
export function Component2039({ value = 2039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2039, 'data-value': derived.doubled }, children);
}
export default Component2039;
