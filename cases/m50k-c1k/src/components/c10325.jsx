import React from 'react';
const LABEL_10325 = 'component_10325';
export function Component10325({ value = 10325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10325, 'data-value': derived.doubled }, children);
}
export default Component10325;
