import React from 'react';
const LABEL_39059 = 'component_39059';
export function Component39059({ value = 39059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39059, 'data-value': derived.doubled }, children);
}
export default Component39059;
