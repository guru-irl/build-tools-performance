import React from 'react';
const LABEL_17860 = 'component_17860';
export function Component17860({ value = 17860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17860, 'data-value': derived.doubled }, children);
}
export default Component17860;
