import React from 'react';
const LABEL_8829 = 'component_8829';
export function Component8829({ value = 8829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8829, 'data-value': derived.doubled }, children);
}
export default Component8829;
