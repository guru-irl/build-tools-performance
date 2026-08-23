import React from 'react';
const LABEL_29621 = 'component_29621';
export function Component29621({ value = 29621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29621, 'data-value': derived.doubled }, children);
}
export default Component29621;
