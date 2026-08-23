import React from 'react';
const LABEL_43370 = 'component_43370';
export function Component43370({ value = 43370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43370, 'data-value': derived.doubled }, children);
}
export default Component43370;
