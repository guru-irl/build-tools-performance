import React from 'react';
const LABEL_10502 = 'component_10502';
export function Component10502({ value = 10502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10502, 'data-value': derived.doubled }, children);
}
export default Component10502;
