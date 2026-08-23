import React from 'react';
const LABEL_19175 = 'component_19175';
export function Component19175({ value = 19175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19175, 'data-value': derived.doubled }, children);
}
export default Component19175;
