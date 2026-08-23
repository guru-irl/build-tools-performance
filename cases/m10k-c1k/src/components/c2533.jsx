import React from 'react';
const LABEL_2533 = 'component_2533';
export function Component2533({ value = 2533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2533, 'data-value': derived.doubled }, children);
}
export default Component2533;
