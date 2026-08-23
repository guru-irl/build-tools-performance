import React from 'react';
const LABEL_38532 = 'component_38532';
export function Component38532({ value = 38532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38532, 'data-value': derived.doubled }, children);
}
export default Component38532;
