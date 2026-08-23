import React from 'react';
const LABEL_33895 = 'component_33895';
export function Component33895({ value = 33895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33895, 'data-value': derived.doubled }, children);
}
export default Component33895;
