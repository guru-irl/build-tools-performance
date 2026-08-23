import React from 'react';
const LABEL_26720 = 'component_26720';
export function Component26720({ value = 26720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26720, 'data-value': derived.doubled }, children);
}
export default Component26720;
