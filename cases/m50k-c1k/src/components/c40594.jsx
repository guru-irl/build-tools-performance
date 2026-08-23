import React from 'react';
const LABEL_40594 = 'component_40594';
export function Component40594({ value = 40594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40594, 'data-value': derived.doubled }, children);
}
export default Component40594;
