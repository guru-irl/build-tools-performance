import React from 'react';
const LABEL_16212 = 'component_16212';
export function Component16212({ value = 16212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16212, 'data-value': derived.doubled }, children);
}
export default Component16212;
