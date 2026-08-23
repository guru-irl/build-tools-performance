import React from 'react';
const LABEL_23829 = 'component_23829';
export function Component23829({ value = 23829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23829, 'data-value': derived.doubled }, children);
}
export default Component23829;
