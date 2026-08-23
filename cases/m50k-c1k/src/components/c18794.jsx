import React from 'react';
const LABEL_18794 = 'component_18794';
export function Component18794({ value = 18794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18794, 'data-value': derived.doubled }, children);
}
export default Component18794;
