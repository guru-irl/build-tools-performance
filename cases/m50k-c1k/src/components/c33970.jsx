import React from 'react';
const LABEL_33970 = 'component_33970';
export function Component33970({ value = 33970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33970, 'data-value': derived.doubled }, children);
}
export default Component33970;
