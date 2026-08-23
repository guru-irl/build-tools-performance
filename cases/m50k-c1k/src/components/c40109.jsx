import React from 'react';
const LABEL_40109 = 'component_40109';
export function Component40109({ value = 40109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40109, 'data-value': derived.doubled }, children);
}
export default Component40109;
