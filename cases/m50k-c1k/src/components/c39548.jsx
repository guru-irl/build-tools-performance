import React from 'react';
const LABEL_39548 = 'component_39548';
export function Component39548({ value = 39548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39548, 'data-value': derived.doubled }, children);
}
export default Component39548;
