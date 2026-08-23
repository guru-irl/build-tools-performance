import React from 'react';
const LABEL_38173 = 'component_38173';
export function Component38173({ value = 38173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38173, 'data-value': derived.doubled }, children);
}
export default Component38173;
