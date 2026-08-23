import React from 'react';
const LABEL_33820 = 'component_33820';
export function Component33820({ value = 33820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33820, 'data-value': derived.doubled }, children);
}
export default Component33820;
