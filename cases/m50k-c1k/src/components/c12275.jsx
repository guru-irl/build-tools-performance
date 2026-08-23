import React from 'react';
const LABEL_12275 = 'component_12275';
export function Component12275({ value = 12275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12275, 'data-value': derived.doubled }, children);
}
export default Component12275;
