import React from 'react';
const LABEL_22879 = 'component_22879';
export function Component22879({ value = 22879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22879, 'data-value': derived.doubled }, children);
}
export default Component22879;
