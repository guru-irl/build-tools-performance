import React from 'react';
const LABEL_36180 = 'component_36180';
export function Component36180({ value = 36180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36180, 'data-value': derived.doubled }, children);
}
export default Component36180;
