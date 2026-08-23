import React from 'react';
const LABEL_34275 = 'component_34275';
export function Component34275({ value = 34275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34275, 'data-value': derived.doubled }, children);
}
export default Component34275;
