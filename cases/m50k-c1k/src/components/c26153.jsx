import React from 'react';
const LABEL_26153 = 'component_26153';
export function Component26153({ value = 26153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26153, 'data-value': derived.doubled }, children);
}
export default Component26153;
