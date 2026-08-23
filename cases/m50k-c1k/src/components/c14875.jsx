import React from 'react';
const LABEL_14875 = 'component_14875';
export function Component14875({ value = 14875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14875, 'data-value': derived.doubled }, children);
}
export default Component14875;
