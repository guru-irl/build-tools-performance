import React from 'react';
const LABEL_30989 = 'component_30989';
export function Component30989({ value = 30989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30989, 'data-value': derived.doubled }, children);
}
export default Component30989;
