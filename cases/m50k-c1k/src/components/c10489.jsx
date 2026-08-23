import React from 'react';
const LABEL_10489 = 'component_10489';
export function Component10489({ value = 10489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10489, 'data-value': derived.doubled }, children);
}
export default Component10489;
