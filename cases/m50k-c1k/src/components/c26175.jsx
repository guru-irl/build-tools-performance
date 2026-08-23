import React from 'react';
const LABEL_26175 = 'component_26175';
export function Component26175({ value = 26175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26175, 'data-value': derived.doubled }, children);
}
export default Component26175;
