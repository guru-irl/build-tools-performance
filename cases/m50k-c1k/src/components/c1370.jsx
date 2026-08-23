import React from 'react';
const LABEL_1370 = 'component_1370';
export function Component1370({ value = 1370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1370, 'data-value': derived.doubled }, children);
}
export default Component1370;
