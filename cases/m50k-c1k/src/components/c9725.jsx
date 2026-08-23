import React from 'react';
const LABEL_9725 = 'component_9725';
export function Component9725({ value = 9725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9725, 'data-value': derived.doubled }, children);
}
export default Component9725;
