import React from 'react';
const LABEL_3370 = 'component_3370';
export function Component3370({ value = 3370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3370, 'data-value': derived.doubled }, children);
}
export default Component3370;
