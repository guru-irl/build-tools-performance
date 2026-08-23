import React from 'react';
const LABEL_44173 = 'component_44173';
export function Component44173({ value = 44173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44173, 'data-value': derived.doubled }, children);
}
export default Component44173;
