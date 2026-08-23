import React from 'react';
const LABEL_22469 = 'component_22469';
export function Component22469({ value = 22469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22469, 'data-value': derived.doubled }, children);
}
export default Component22469;
