import React from 'react';
const LABEL_22536 = 'component_22536';
export function Component22536({ value = 22536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22536, 'data-value': derived.doubled }, children);
}
export default Component22536;
