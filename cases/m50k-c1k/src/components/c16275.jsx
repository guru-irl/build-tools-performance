import React from 'react';
const LABEL_16275 = 'component_16275';
export function Component16275({ value = 16275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16275, 'data-value': derived.doubled }, children);
}
export default Component16275;
