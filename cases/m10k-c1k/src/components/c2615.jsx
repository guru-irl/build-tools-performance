import React from 'react';
const LABEL_2615 = 'component_2615';
export function Component2615({ value = 2615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2615, 'data-value': derived.doubled }, children);
}
export default Component2615;
