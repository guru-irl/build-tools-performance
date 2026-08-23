import React from 'react';
const LABEL_14240 = 'component_14240';
export function Component14240({ value = 14240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14240, 'data-value': derived.doubled }, children);
}
export default Component14240;
