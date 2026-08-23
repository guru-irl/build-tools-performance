import React from 'react';
const LABEL_28829 = 'component_28829';
export function Component28829({ value = 28829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28829, 'data-value': derived.doubled }, children);
}
export default Component28829;
