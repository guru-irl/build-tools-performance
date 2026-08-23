import React from 'react';
const LABEL_14275 = 'component_14275';
export function Component14275({ value = 14275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14275, 'data-value': derived.doubled }, children);
}
export default Component14275;
