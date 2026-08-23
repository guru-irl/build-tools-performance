import React from 'react';
const LABEL_13290 = 'component_13290';
export function Component13290({ value = 13290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13290, 'data-value': derived.doubled }, children);
}
export default Component13290;
