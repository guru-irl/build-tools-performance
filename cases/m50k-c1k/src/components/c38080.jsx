import React from 'react';
const LABEL_38080 = 'component_38080';
export function Component38080({ value = 38080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38080, 'data-value': derived.doubled }, children);
}
export default Component38080;
