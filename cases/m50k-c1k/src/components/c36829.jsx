import React from 'react';
const LABEL_36829 = 'component_36829';
export function Component36829({ value = 36829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36829, 'data-value': derived.doubled }, children);
}
export default Component36829;
