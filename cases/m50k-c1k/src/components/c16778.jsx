import React from 'react';
const LABEL_16778 = 'component_16778';
export function Component16778({ value = 16778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16778, 'data-value': derived.doubled }, children);
}
export default Component16778;
