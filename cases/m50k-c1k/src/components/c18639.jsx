import React from 'react';
const LABEL_18639 = 'component_18639';
export function Component18639({ value = 18639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18639, 'data-value': derived.doubled }, children);
}
export default Component18639;
