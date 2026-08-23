import React from 'react';
const LABEL_18275 = 'component_18275';
export function Component18275({ value = 18275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18275, 'data-value': derived.doubled }, children);
}
export default Component18275;
