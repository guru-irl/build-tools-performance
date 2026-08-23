import React from 'react';
const LABEL_26157 = 'component_26157';
export function Component26157({ value = 26157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26157, 'data-value': derived.doubled }, children);
}
export default Component26157;
