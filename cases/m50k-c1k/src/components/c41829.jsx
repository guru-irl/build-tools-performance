import React from 'react';
const LABEL_41829 = 'component_41829';
export function Component41829({ value = 41829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41829, 'data-value': derived.doubled }, children);
}
export default Component41829;
