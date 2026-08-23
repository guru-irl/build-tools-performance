import React from 'react';
const LABEL_19117 = 'component_19117';
export function Component19117({ value = 19117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19117, 'data-value': derived.doubled }, children);
}
export default Component19117;
