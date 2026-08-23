import React from 'react';
const LABEL_13659 = 'component_13659';
export function Component13659({ value = 13659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13659, 'data-value': derived.doubled }, children);
}
export default Component13659;
