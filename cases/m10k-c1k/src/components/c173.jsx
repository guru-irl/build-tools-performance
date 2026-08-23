import React from 'react';
const LABEL_173 = 'component_173';
export function Component173({ value = 173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_173, 'data-value': derived.doubled }, children);
}
export default Component173;
