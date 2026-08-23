import React from 'react';
const LABEL_38246 = 'component_38246';
export function Component38246({ value = 38246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38246, 'data-value': derived.doubled }, children);
}
export default Component38246;
