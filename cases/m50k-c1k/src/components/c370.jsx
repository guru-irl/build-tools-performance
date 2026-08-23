import React from 'react';
const LABEL_370 = 'component_370';
export function Component370({ value = 370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_370, 'data-value': derived.doubled }, children);
}
export default Component370;
