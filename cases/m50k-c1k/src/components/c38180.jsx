import React from 'react';
const LABEL_38180 = 'component_38180';
export function Component38180({ value = 38180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38180, 'data-value': derived.doubled }, children);
}
export default Component38180;
