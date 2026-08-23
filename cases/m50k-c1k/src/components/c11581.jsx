import React from 'react';
const LABEL_11581 = 'component_11581';
export function Component11581({ value = 11581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11581, 'data-value': derived.doubled }, children);
}
export default Component11581;
