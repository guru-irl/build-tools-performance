import React from 'react';
const LABEL_14621 = 'component_14621';
export function Component14621({ value = 14621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14621, 'data-value': derived.doubled }, children);
}
export default Component14621;
