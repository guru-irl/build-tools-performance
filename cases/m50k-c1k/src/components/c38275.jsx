import React from 'react';
const LABEL_38275 = 'component_38275';
export function Component38275({ value = 38275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38275, 'data-value': derived.doubled }, children);
}
export default Component38275;
