import React from 'react';
const LABEL_36275 = 'component_36275';
export function Component36275({ value = 36275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36275, 'data-value': derived.doubled }, children);
}
export default Component36275;
