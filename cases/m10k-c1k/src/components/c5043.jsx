import React from 'react';
const LABEL_5043 = 'component_5043';
export function Component5043({ value = 5043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5043, 'data-value': derived.doubled }, children);
}
export default Component5043;
