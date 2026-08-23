import React from 'react';
const LABEL_22117 = 'component_22117';
export function Component22117({ value = 22117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22117, 'data-value': derived.doubled }, children);
}
export default Component22117;
