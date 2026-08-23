import React from 'react';
const LABEL_32173 = 'component_32173';
export function Component32173({ value = 32173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32173, 'data-value': derived.doubled }, children);
}
export default Component32173;
