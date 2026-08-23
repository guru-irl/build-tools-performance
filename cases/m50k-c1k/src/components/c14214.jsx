import React from 'react';
const LABEL_14214 = 'component_14214';
export function Component14214({ value = 14214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14214, 'data-value': derived.doubled }, children);
}
export default Component14214;
