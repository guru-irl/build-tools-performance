import React from 'react';
const LABEL_34874 = 'component_34874';
export function Component34874({ value = 34874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34874, 'data-value': derived.doubled }, children);
}
export default Component34874;
