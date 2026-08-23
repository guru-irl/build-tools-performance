import React from 'react';
const LABEL_6932 = 'component_6932';
export function Component6932({ value = 6932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6932, 'data-value': derived.doubled }, children);
}
export default Component6932;
