import React from 'react';
const LABEL_35829 = 'component_35829';
export function Component35829({ value = 35829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35829, 'data-value': derived.doubled }, children);
}
export default Component35829;
