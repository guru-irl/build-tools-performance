import React from 'react';
const LABEL_6792 = 'component_6792';
export function Component6792({ value = 6792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6792, 'data-value': derived.doubled }, children);
}
export default Component6792;
