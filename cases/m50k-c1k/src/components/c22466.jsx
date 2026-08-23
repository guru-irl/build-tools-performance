import React from 'react';
const LABEL_22466 = 'component_22466';
export function Component22466({ value = 22466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22466, 'data-value': derived.doubled }, children);
}
export default Component22466;
