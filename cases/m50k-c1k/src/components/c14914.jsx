import React from 'react';
const LABEL_14914 = 'component_14914';
export function Component14914({ value = 14914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14914, 'data-value': derived.doubled }, children);
}
export default Component14914;
