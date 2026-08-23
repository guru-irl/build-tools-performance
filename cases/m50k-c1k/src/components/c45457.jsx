import React from 'react';
const LABEL_45457 = 'component_45457';
export function Component45457({ value = 45457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45457, 'data-value': derived.doubled }, children);
}
export default Component45457;
