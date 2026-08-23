import React from 'react';
const LABEL_23370 = 'component_23370';
export function Component23370({ value = 23370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23370, 'data-value': derived.doubled }, children);
}
export default Component23370;
