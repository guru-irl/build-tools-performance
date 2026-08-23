import React from 'react';
const LABEL_10370 = 'component_10370';
export function Component10370({ value = 10370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10370, 'data-value': derived.doubled }, children);
}
export default Component10370;
