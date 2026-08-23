import React from 'react';
const LABEL_33107 = 'component_33107';
export function Component33107({ value = 33107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33107, 'data-value': derived.doubled }, children);
}
export default Component33107;
