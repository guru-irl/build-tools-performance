import React from 'react';
const LABEL_38534 = 'component_38534';
export function Component38534({ value = 38534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38534, 'data-value': derived.doubled }, children);
}
export default Component38534;
