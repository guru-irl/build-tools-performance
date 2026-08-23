import React from 'react';
const LABEL_35275 = 'component_35275';
export function Component35275({ value = 35275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35275, 'data-value': derived.doubled }, children);
}
export default Component35275;
