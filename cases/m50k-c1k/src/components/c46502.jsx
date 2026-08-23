import React from 'react';
const LABEL_46502 = 'component_46502';
export function Component46502({ value = 46502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46502, 'data-value': derived.doubled }, children);
}
export default Component46502;
