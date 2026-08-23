import React from 'react';
const LABEL_17987 = 'component_17987';
export function Component17987({ value = 17987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17987, 'data-value': derived.doubled }, children);
}
export default Component17987;
