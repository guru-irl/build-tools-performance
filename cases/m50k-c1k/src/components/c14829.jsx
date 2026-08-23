import React from 'react';
const LABEL_14829 = 'component_14829';
export function Component14829({ value = 14829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14829, 'data-value': derived.doubled }, children);
}
export default Component14829;
