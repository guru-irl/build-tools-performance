import React from 'react';
const LABEL_28511 = 'component_28511';
export function Component28511({ value = 28511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28511, 'data-value': derived.doubled }, children);
}
export default Component28511;
