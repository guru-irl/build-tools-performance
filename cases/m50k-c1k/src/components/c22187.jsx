import React from 'react';
const LABEL_22187 = 'component_22187';
export function Component22187({ value = 22187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22187, 'data-value': derived.doubled }, children);
}
export default Component22187;
