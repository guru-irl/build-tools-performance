import React from 'react';
const LABEL_36502 = 'component_36502';
export function Component36502({ value = 36502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36502, 'data-value': derived.doubled }, children);
}
export default Component36502;
