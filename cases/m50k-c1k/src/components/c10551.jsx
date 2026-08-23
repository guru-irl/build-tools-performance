import React from 'react';
const LABEL_10551 = 'component_10551';
export function Component10551({ value = 10551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10551, 'data-value': derived.doubled }, children);
}
export default Component10551;
