import React from 'react';
const LABEL_6399 = 'component_6399';
export function Component6399({ value = 6399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6399, 'data-value': derived.doubled }, children);
}
export default Component6399;
