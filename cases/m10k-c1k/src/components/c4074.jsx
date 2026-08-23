import React from 'react';
const LABEL_4074 = 'component_4074';
export function Component4074({ value = 4074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4074, 'data-value': derived.doubled }, children);
}
export default Component4074;
