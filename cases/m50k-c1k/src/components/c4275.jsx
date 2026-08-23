import React from 'react';
const LABEL_4275 = 'component_4275';
export function Component4275({ value = 4275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4275, 'data-value': derived.doubled }, children);
}
export default Component4275;
