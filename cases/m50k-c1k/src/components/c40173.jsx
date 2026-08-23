import React from 'react';
const LABEL_40173 = 'component_40173';
export function Component40173({ value = 40173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40173, 'data-value': derived.doubled }, children);
}
export default Component40173;
