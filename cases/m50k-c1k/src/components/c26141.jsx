import React from 'react';
const LABEL_26141 = 'component_26141';
export function Component26141({ value = 26141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26141, 'data-value': derived.doubled }, children);
}
export default Component26141;
