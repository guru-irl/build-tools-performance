import React from 'react';
const LABEL_16043 = 'component_16043';
export function Component16043({ value = 16043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16043, 'data-value': derived.doubled }, children);
}
export default Component16043;
