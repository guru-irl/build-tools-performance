import React from 'react';
const LABEL_14631 = 'component_14631';
export function Component14631({ value = 14631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14631, 'data-value': derived.doubled }, children);
}
export default Component14631;
