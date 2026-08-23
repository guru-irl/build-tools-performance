import React from 'react';
const LABEL_38074 = 'component_38074';
export function Component38074({ value = 38074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38074, 'data-value': derived.doubled }, children);
}
export default Component38074;
