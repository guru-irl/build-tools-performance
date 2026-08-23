import React from 'react';
const LABEL_20275 = 'component_20275';
export function Component20275({ value = 20275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20275, 'data-value': derived.doubled }, children);
}
export default Component20275;
