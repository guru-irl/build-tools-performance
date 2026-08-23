import React from 'react';
const LABEL_3203 = 'component_3203';
export function Component3203({ value = 3203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3203, 'data-value': derived.doubled }, children);
}
export default Component3203;
