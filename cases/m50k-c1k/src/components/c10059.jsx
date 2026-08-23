import React from 'react';
const LABEL_10059 = 'component_10059';
export function Component10059({ value = 10059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10059, 'data-value': derived.doubled }, children);
}
export default Component10059;
