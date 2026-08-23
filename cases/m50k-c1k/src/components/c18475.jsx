import React from 'react';
const LABEL_18475 = 'component_18475';
export function Component18475({ value = 18475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18475, 'data-value': derived.doubled }, children);
}
export default Component18475;
