import React from 'react';
const LABEL_38145 = 'component_38145';
export function Component38145({ value = 38145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38145, 'data-value': derived.doubled }, children);
}
export default Component38145;
