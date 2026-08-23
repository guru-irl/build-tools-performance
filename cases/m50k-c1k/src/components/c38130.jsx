import React from 'react';
const LABEL_38130 = 'component_38130';
export function Component38130({ value = 38130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38130, 'data-value': derived.doubled }, children);
}
export default Component38130;
