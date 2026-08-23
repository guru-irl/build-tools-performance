import React from 'react';
const LABEL_18109 = 'component_18109';
export function Component18109({ value = 18109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18109, 'data-value': derived.doubled }, children);
}
export default Component18109;
