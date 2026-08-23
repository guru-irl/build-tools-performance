import React from 'react';
const LABEL_18195 = 'component_18195';
export function Component18195({ value = 18195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18195, 'data-value': derived.doubled }, children);
}
export default Component18195;
