import React from 'react';
const LABEL_21895 = 'component_21895';
export function Component21895({ value = 21895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21895, 'data-value': derived.doubled }, children);
}
export default Component21895;
