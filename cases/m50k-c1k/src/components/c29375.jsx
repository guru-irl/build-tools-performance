import React from 'react';
const LABEL_29375 = 'component_29375';
export function Component29375({ value = 29375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29375, 'data-value': derived.doubled }, children);
}
export default Component29375;
