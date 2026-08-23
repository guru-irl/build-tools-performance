import React from 'react';
const LABEL_9511 = 'component_9511';
export function Component9511({ value = 9511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9511, 'data-value': derived.doubled }, children);
}
export default Component9511;
