import React from 'react';
const LABEL_6735 = 'component_6735';
export function Component6735({ value = 6735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6735, 'data-value': derived.doubled }, children);
}
export default Component6735;
