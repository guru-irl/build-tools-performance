import React from 'react';
const LABEL_18131 = 'component_18131';
export function Component18131({ value = 18131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18131, 'data-value': derived.doubled }, children);
}
export default Component18131;
