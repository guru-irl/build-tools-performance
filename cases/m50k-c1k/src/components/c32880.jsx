import React from 'react';
const LABEL_32880 = 'component_32880';
export function Component32880({ value = 32880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32880, 'data-value': derived.doubled }, children);
}
export default Component32880;
