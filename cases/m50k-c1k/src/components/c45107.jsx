import React from 'react';
const LABEL_45107 = 'component_45107';
export function Component45107({ value = 45107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45107, 'data-value': derived.doubled }, children);
}
export default Component45107;
