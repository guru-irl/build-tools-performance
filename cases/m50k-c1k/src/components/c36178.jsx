import React from 'react';
const LABEL_36178 = 'component_36178';
export function Component36178({ value = 36178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36178, 'data-value': derived.doubled }, children);
}
export default Component36178;
