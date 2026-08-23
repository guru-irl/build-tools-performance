import React from 'react';
const LABEL_19758 = 'component_19758';
export function Component19758({ value = 19758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19758, 'data-value': derived.doubled }, children);
}
export default Component19758;
