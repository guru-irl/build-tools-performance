import React from 'react';
const LABEL_536 = 'component_536';
export function Component536({ value = 536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_536, 'data-value': derived.doubled }, children);
}
export default Component536;
