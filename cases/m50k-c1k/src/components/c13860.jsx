import React from 'react';
const LABEL_13860 = 'component_13860';
export function Component13860({ value = 13860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13860, 'data-value': derived.doubled }, children);
}
export default Component13860;
