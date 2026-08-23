import React from 'react';
const LABEL_6325 = 'component_6325';
export function Component6325({ value = 6325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6325, 'data-value': derived.doubled }, children);
}
export default Component6325;
