import React from 'react';
const LABEL_7161 = 'component_7161';
export function Component7161({ value = 7161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7161, 'data-value': derived.doubled }, children);
}
export default Component7161;
