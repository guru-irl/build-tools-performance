import React from 'react';
const LABEL_39275 = 'component_39275';
export function Component39275({ value = 39275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39275, 'data-value': derived.doubled }, children);
}
export default Component39275;
