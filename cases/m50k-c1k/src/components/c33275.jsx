import React from 'react';
const LABEL_33275 = 'component_33275';
export function Component33275({ value = 33275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33275, 'data-value': derived.doubled }, children);
}
export default Component33275;
