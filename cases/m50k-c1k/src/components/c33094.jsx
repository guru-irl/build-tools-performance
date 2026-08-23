import React from 'react';
const LABEL_33094 = 'component_33094';
export function Component33094({ value = 33094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33094, 'data-value': derived.doubled }, children);
}
export default Component33094;
