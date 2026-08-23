import React from 'react';
const LABEL_11829 = 'component_11829';
export function Component11829({ value = 11829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11829, 'data-value': derived.doubled }, children);
}
export default Component11829;
