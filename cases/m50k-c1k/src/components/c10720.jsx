import React from 'react';
const LABEL_10720 = 'component_10720';
export function Component10720({ value = 10720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10720, 'data-value': derived.doubled }, children);
}
export default Component10720;
