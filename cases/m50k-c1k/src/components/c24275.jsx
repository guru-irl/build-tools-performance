import React from 'react';
const LABEL_24275 = 'component_24275';
export function Component24275({ value = 24275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24275, 'data-value': derived.doubled }, children);
}
export default Component24275;
