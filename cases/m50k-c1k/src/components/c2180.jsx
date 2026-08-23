import React from 'react';
const LABEL_2180 = 'component_2180';
export function Component2180({ value = 2180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2180, 'data-value': derived.doubled }, children);
}
export default Component2180;
