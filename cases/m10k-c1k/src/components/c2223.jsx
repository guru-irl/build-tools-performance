import React from 'react';
const LABEL_2223 = 'component_2223';
export function Component2223({ value = 2223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2223, 'data-value': derived.doubled }, children);
}
export default Component2223;
