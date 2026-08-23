import React from 'react';
const LABEL_13004 = 'component_13004';
export function Component13004({ value = 13004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13004, 'data-value': derived.doubled }, children);
}
export default Component13004;
