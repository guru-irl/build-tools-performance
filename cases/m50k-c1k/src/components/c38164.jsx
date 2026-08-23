import React from 'react';
const LABEL_38164 = 'component_38164';
export function Component38164({ value = 38164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38164, 'data-value': derived.doubled }, children);
}
export default Component38164;
