import React from 'react';
const LABEL_37275 = 'component_37275';
export function Component37275({ value = 37275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37275, 'data-value': derived.doubled }, children);
}
export default Component37275;
