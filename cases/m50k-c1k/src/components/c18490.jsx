import React from 'react';
const LABEL_18490 = 'component_18490';
export function Component18490({ value = 18490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18490, 'data-value': derived.doubled }, children);
}
export default Component18490;
